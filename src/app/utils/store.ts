import { writable, type Writable, type Unsubscriber, type Subscriber } from 'svelte/store';

export enum StorageType {
  Local = 'localStorage',
  Session = 'sessionStorage',
}

interface Storage {
  key: string;
  storageType: StorageType;
}

/**
 * A writable svelte store that allows you to get the current value
 * and reset the store to its initial value easily
 *
 * @export Store
 * @class Store
 * @param {any} value - the initial value of the store
 * @example
 * const store = new Store(0);
 */
export default class Store<T> {
  private value: T;
  private base: T;
  private writable: Writable<T>;
  private storage?: Storage;

  constructor(value: T, storage?: Storage) {
    this.value = value;
    this.base = value;
    this.writable = writable<T>(value);
    this.storage = storage;
    this.save();
  }

  /**
   * reset the store to its initial value
   *
   * @public
   * @returns {void}
   * @memberof Store
   * @example
   * const store = new Store(0);
   * store.set(1);
   * store.reset(); // 0
   */
  reset() {
    this.value = this.base;
    this.writable.set(this.base);
  }

  /**
   * Set the value of the store
   *
   * @public
   * @param {any} newValue - the new value to set the store to
   * @returns {void}
   * @memberof Store
   * @example
   * const store = new Store(0);
   * store.set(1); // 1
   */
  set(newValue: T) {
    this.value = newValue;
    this.save();
    return this.writable.set(newValue);
  }

  /**
   * Update the store with a function that returns the new value
   *
   * @public
   * @param {function} fn - the function to call to get the new value
   * @returns {void}
   * @memberof Store
   * @example
   * const store = new Store(0);
   * store.update(val => val + 1); // 1
   * store.update(val => val + 1); // 2
   */
  update(fn: (value: T) => T) {
    this.writable.update(oldValue => (this.value = fn(oldValue)));
  }

  /**
   * Get the current value of the store
   *
   * @public
   * @returns {any} - the current value of the store
   * @memberof Store
   * @example
   * const store = new Store(0);
   * store.get(); // 0
   * store.set(1);
   * store.get(); // 1
   */
  get() {
    return this.value;
  }

  /**
   * Subscribe to the store, but skip the first value as it fires immediately
   *
   * @public
   * @param {function} fn - the function to call when the store changes
   * @returns {Unsubscriber}
   * @memberof Store
   * @example
   * const store = new Store(0);
   * store.change(val => console.log(val));
   */
  change(fn: Subscriber<T>): Unsubscriber {
    let skipped = false;
    return this.writable.subscribe(val => {
      if (skipped) fn(val);
      skipped = true;
    });
  }

  /**
   * Subscribe to the store with standard Svelte subscription
   *
   * @public
   * @param {Subscriber} run - the function to call when the store changes
   * @param {function} [invalidate] - optional function to call when invalidation is needed
   * @returns {Unsubscriber}
   * @memberof Store
   * @example
   * const store = new Store(0);
   * const unsubscribe = store.subscribe(val => console.log(val));
   * // Later, to unsubscribe:
   * // unsubscribe();
   */
  subscribe(run: Subscriber<T>, invalidate?: (value?: T) => void): Unsubscriber {
    const unsub = this.writable.subscribe(run, invalidate);
    return () => unsub();
  }

  /**
   * Save the store value to storage
   *
   * @public
   * @returns {void}
   * @memberof Store
   * @example
   * const store = new Store(0, { key: 'count', storageType: StorageType.Local });
   * store.save();
   */
  save() {
    if (this.storage) {
      const { storageType, key } = this.storage;
      window[storageType].setItem(key, JSON.stringify(this.value));
    }
  }

  load() {
    if (this.storage) {
      const { storageType, key } = this.storage;
      const value = window[storageType].getItem(key);
      if (value) {
      }
    }
  }
}
