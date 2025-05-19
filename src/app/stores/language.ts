import Store from '../utils/store';

export type Language = 'Polish' | 'English';
export const language = new Store<Language>('Polish');
