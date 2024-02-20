export const compactNumber = (num: number): string => {
  if (!num) return '0';
  if ((num > 0 && num < 1000) || (num < 0 && num > -1000)) {
    return String(Math.round(num));
  }

  return Intl.NumberFormat('en', { notation: 'compact' })
    .format(num)
    .toLowerCase();
};
