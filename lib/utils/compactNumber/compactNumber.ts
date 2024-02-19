export const compactNumber = (num: number): string => {
  if (num < 1000) return String(num);
  if (num < 1000000) return Math.round((num / 1000) * 10) / 10 + 'k';
  return Math.round((num / 1000000) * 10) / 10 + 'm';
};
