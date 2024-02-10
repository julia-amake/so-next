'use client';

import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Theme } from '@/types/theme';
import { THEME_LS_KEY } from '@/constants/localStorage';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>();

  // set default theme
  useEffect(() => {
    if (theme) return;
    setTheme((localStorage.getItem(THEME_LS_KEY) || 'light') as Theme);
  }, [theme]);

  // set new theme
  useEffect(() => {
    if (!theme) return;
    localStorage.setItem(THEME_LS_KEY, theme);

    const mode: Exclude<Theme, 'system'> =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
    document.documentElement.classList.add(mode);
  }, [theme]);

  if (!theme) return null;

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
