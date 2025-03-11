import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Start in september, used for X axis
export const geologicalMonthsInFrench = [
  'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUI',
  'JUIL', 'AOU'
];

export function getMonthInFrench(epochDate: number): string {
  const monthsInFrench = [
    'JAN', 'FEV', 'MAR', 'AVR', 'MAI', 'JUI',
    'JUIL', 'AOU', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

  const date = new Date(epochDate);
  const monthIndex = date.getMonth(); // Get month index (0-11)

  return monthsInFrench[monthIndex];
}

export function getMonthAndYearInFrench(epoch: number): string {
  const date = new Date(epoch);

  const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
  ];

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export function hexToRgba(hex: string, opacity: number) {
  // Remove the hash if it's included in the hex code
  hex = hex.replace('#', '');

  // Extract the red, green, and blue components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGBA color
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
