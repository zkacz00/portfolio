export type BaseEvent = (e: { name: string }) => void;
export type ValueEvent = (e: { name: string; value: string }) => void;
export type ToggleEvent = (e: { name: string; checked: boolean }) => void;
export type ValidateEvent = (e: { name: string; value: string }) => string | void;

export type EventObject<E, T> = E & { currentTarget: EventTarget & T };
