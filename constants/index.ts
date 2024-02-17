import { ThemeSettings } from '@/types/theme';
import { SidebarLink } from '@/types';

export const THEMES: ThemeSettings[] = [
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

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    icon: '/assets/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    icon: '/assets/icons/users.svg',
    route: '/community',
    label: 'Community',
  },
  {
    icon: '/assets/icons/star.svg',
    route: '/collection',
    label: 'Collections',
  },
  {
    icon: '/assets/icons/suitcase.svg',
    route: '/jobs',
    label: 'Find Jobs',
  },
  {
    icon: '/assets/icons/tag.svg',
    route: '/tags',
    label: 'Tags',
  },
  {
    icon: '/assets/icons/user.svg',
    route: '/profile',
    label: 'Profile',
  },
  {
    icon: '/assets/icons/question.svg',
    route: '/ask-question',
    label: 'Ask a question',
  },
];

export const QUESTIONS_FILTERS = [
  { title: 'Newest', value: 'newest' },
  { title: 'Recommended', value: 'recommended' },
  { title: 'Frequent', value: 'frequent' },
  { title: 'Unanswered', value: 'unanswered' },
];
