import { Direction } from '../types/directions.js';

/**
 * Handles keydown events (tab key) to invoke a given callback function when the 'Enter' or 'Space' keys are pressed.
 *
 * @param {KeyboardEvent} event The keyboard event object.
 * @param {() => void} callback The callback function to be invoked on 'Enter' or 'Space' keypress.
 */
export const handleEnterKey = (event: KeyboardEvent, callback: () => void): void => {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      callback();
      break;
  }
};

/**
 * Handles keydown events for arrow keys on tab controls, invoking callback functions for navigation.
 *
 * @param {KeyboardEvent} event The keyboard event object.
 * @param {Direction} direction The navigation direction, either Direction.VERTICAL or Direction.HORIZONTAL.
 * @param {() => void} callbackNext The callback function to be invoked for 'ArrowUp' or 'ArrowRight' key.
 * @param {() => void} callbackPrevious The callback function to be invoked for 'ArrowDown' or 'ArrowLeft' key.
 */
export const handleArrowKeys = (
  event: KeyboardEvent,
  direction: Direction,
  callbackNext: () => void,
  callbackPrevious: () => void
): void => {
  const keyMap: { [key: string]: (() => void) | undefined } = {
    ArrowUp: direction === Direction.VERTICAL ? callbackPrevious : undefined,
    ArrowDown: direction === Direction.VERTICAL ? callbackNext : undefined,
    ArrowLeft: direction === Direction.HORIZONTAL ? callbackPrevious : undefined,
    ArrowRight: direction === Direction.HORIZONTAL ? callbackNext : undefined,
  };

  const callback = keyMap[event.key as keyof typeof keyMap];
  if (callback) {
    event.preventDefault();
    callback();
  }
};

const getTabbableElements = (startElementSelector?: string, endElementSelector?: string) => {
  const tabbableElements = Array.from(
    document.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
  const startIndex = startElementSelector
    ? Math.max(0, tabbableElements.indexOf(document.querySelector<HTMLElement>(startElementSelector) as HTMLElement))
    : 0;
  const endIndex = endElementSelector
    ? Math.min(
        tabbableElements.indexOf(document.querySelector<HTMLElement>(endElementSelector) as HTMLElement),
        tabbableElements.length - 1
      )
    : tabbableElements.length - 1;
  return endIndex === -1 ? [] : tabbableElements.slice(startIndex, endIndex + 2);
};

/**
 * Focuses the next tabbable element in the DOM. If an end element selector is provided,
 * tabbing will wrap around to the first element and will be limited to the elements
 * before the end element. Otherwise, it defaults to all tabbable elements on the page.
 *
 * @param {string} [endElementSelector] - A CSS selector string for the last element
 * in the set of tabbable elements to cycle through.
 */
export const focusNextTabbableElement = (endElementSelector?: string) => {
  const tabbableElements = getTabbableElements(undefined, endElementSelector);
  const currentIndex = tabbableElements.findIndex(el => el === document.activeElement);
  const nextIndex = (currentIndex + 1) % tabbableElements.length;
  tabbableElements[nextIndex]?.focus();
};

/**
 * Focuses the previous tabbable element in the DOM. If a start element selector
 * is provided, the navigation will be limited to elements from the start element
 * onwards. Otherwise, it defaults to all tabbable elements on the page.
 *
 * @param {string} [startElementSelector] - A CSS selector string for the first
 * element in the set of tabbable elements to cycle backward through.
 */
export const focusPreviousTabbableElement = (startElementSelector?: string) => {
  const tabbableElements = getTabbableElements(startElementSelector);
  const currentIndex = tabbableElements.findIndex(el => el === document.activeElement);
  const previousIndex = (currentIndex - 1 + tabbableElements.length) % tabbableElements.length;
  if (currentIndex !== 0) {
    tabbableElements[previousIndex]?.focus();
  }
};

/**
 * Check if the focused element is the last option.
 * 
 * @param {KeyboardEvent} event The keyboard event object.
 */
export const isFocusLeavingLastItem = (event: KeyboardEvent, lastElementId: string) => {
  if (event.key === 'Tab' && !event.shiftKey) {
    const lastOption = document.getElementById(lastElementId);
    return document.activeElement === lastOption;
  }
  return false;
};
