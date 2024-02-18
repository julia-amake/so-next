'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Theme } from '@/types/theme';
import { THEME_LS_KEY } from '@/constants/localStorage';

type Mode = Exclude<Theme, 'system'>;

interface ThemeContextType {
  theme: Theme;
  mode?: Mode;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>();
  const [mode, setMode] = useState<Mode>();

  // set default theme
  useEffect(() => {
    if (theme) return;
    setTheme((localStorage.getItem(THEME_LS_KEY) || 'light') as Theme);
  }, [theme]);

  // set new theme
  useEffect(() => {
    if (!theme) return;
    localStorage.setItem(THEME_LS_KEY, theme);

    const mode: Mode =
      theme === 'system'
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
        : theme;

    setMode(mode);
    if (mode === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
    }
    document.documentElement.classList.add(mode);
  }, [theme]);

  if (!theme) return null;

  return (
    <ThemeContext.Provider value={{ theme, mode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
