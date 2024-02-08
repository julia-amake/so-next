'use client';

import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType>();

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>('light');

  const handleThemeChange = useCallback(() => {
    switch (theme) {
      case 'dark':
        setTheme('dark');
        document.documentElement.classList.add('dark');
        break;
      case 'light':
      default:
        setTheme('light');
        document.documentElement.classList.add('light');
    }
  }, [theme]);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
