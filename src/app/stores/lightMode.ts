import Store from '../utils/store';
import { derived } from 'svelte/store';

export type LightMode = 'Light' | 'Dark';

export const lightMode = new Store<LightMode>('Light');

// Derived stores
export const isDarkMode = derived(lightMode, $mode => $mode === 'Dark');
export const isLightMode = derived(lightMode, $mode => $mode === 'Light');