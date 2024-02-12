'use client';

import React, { useMemo } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import { THEMES } from '@/constants';
import { cn } from '@/lib/utils';
import { Theme } from '@/types/theme';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const activeTheme = useMemo(() => THEMES.find((t) => t.value === theme), [theme]);

  const handleThemeClick = (theme: Theme) => () => {
    setTheme(theme);
  };

  if (!activeTheme) return null;

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="data-[state=open]: cursor-pointer bg-light-900 p-0 focus:bg-light-900 dark:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            className="active-theme"
            src={activeTheme.icon}
            alt={activeTheme.label}
            width={30}
            height={30}
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {THEMES.map((t) => (
            <MenubarItem
              key={t.value}
              className={cn('flex items-center gap-3 px-2.5 dark:focus:bg-dark-400', {
                'bg-light-800 dark:bg-dark-400': activeTheme.value === t.value,
              })}
              onClick={handleThemeClick(t.value)}
            >
              <Image
                className={cn({ 'active-theme': activeTheme.value === t.value })}
                src={t.icon}
                alt={t.label}
                width={20}
                height={20}
              />
              <p
                className={cn('body-semibold text-light-500', {
                  'text-primary-500': t.value === theme,
                })}
              >
                {t.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default ThemeSwitcher;
