import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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


