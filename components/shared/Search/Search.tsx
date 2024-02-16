'use client';
import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchProps {
  placeholder?: string;
  defaultValue?: string;
  iconPosition?: 'left' | 'right';
  onSearch: (value: string) => void;
}

export const Search = (props: SearchProps) => {
  const {
    placeholder = 'Search...',
    iconPosition,
    defaultValue = '',
    onSearch,
  } = props;
  const [value, setValue] = useState<string>(defaultValue);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div
      className={cn(
        'background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl border-1 px-4 dark:border-none',
        {
          'flex-row-reverse': iconPosition === 'right',
        },
      )}
    >
      <Image
        className="cursor-pointer"
        src="/assets/icons/search.svg"
        alt="Search"
        width={24}
        height={24}
      />
      <Input
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleSearchChange}
      />
    </div>
  );
};
