import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines CSS class names using clsx and tailwind-merge
 * 
 * This function takes any number of class values (strings, objects, or arrays)
 * and combines them using clsx. The result is then processed by tailwind-merge
 * to resolve any conflicts between Tailwind CSS classes.
 * 
 * @param inputs - Any number of class values to be combined
 * @returns A string of combined and optimized CSS class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}