import Store from '../utils/store';
import { type BuildError } from '../types/errors';

export const errors = new Store<BuildError[]>([]);
