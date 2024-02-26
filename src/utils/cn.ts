// Import the ClassValue type and clsx function from the clsx library
import { type ClassValue, clsx } from "clsx";

// Import the twMerge function from the tailwind-merge library
import { twMerge } from "tailwind-merge";

// Define a function called cn that takes in a variable number of inputs of type ClassValue
export function cn(...inputs: ClassValue[]) {
  // Merge the inputs using the clsx function and then merge the result using the twMerge function
  return twMerge(clsx(inputs));
}