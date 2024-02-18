import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compactNumber = (num: number): string => {
  if (num < 1000) return String(num);

  return Math.round((num / 1000) * 10) / 10 + 'k';
};
