import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const merge = (...inputs: ClassValue[]) => twMerge(clsx(inputs));


