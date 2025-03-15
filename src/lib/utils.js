import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
// Simplified version without TypeScript types
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}