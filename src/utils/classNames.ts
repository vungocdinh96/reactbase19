import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names, resolving conflicts via tailwind-merge
 * and handling conditional classes via clsx.
 * @param inputs One or more class values (strings, arrays, or objects).
 * @returns A single merged class name string.
 */
export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
