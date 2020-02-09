export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function convertToOrdinal(str) {
  const num = Number(str); // convert String to Number primitive
  const oS = ['th', 'st', 'nd', 'rd']; // ordinal suffixes

  return `${str}${oS[(num - 20) % 10] || oS[num] || oS[0]}`;
}
