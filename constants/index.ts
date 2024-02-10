import { ThemeSettings } from '@/types/theme';

export const themes: ThemeSettings[] = [
  {
    value: 'light',
    label: 'Light',
    icon: '/assets/icons/sun.svg',
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: '/assets/icons/moon.svg',
  },
  {
    value: 'system',
    label: 'System',
    icon: '/assets/icons/computer.svg',
  },
];
