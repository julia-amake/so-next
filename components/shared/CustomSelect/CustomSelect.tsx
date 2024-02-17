'use client';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { SelectIcon } from '@radix-ui/react-select';
import s from './CustomSelect.module.css';

interface SortByProps {
  items: { title: string; value: string }[];
  selected?: string;
  title?: string;
  onSelect: (value: string) => void;
  minWidth?: string;
}

export const CustomSelect = (props: SortByProps) => {
  const { title, items, selected, minWidth, onSelect } = props;
  const placeholder = title || 'Sort By';
  const [value, setValue] = useState(selected);

  const handleSelect = (value: string) => {
    setValue(value);
    onSelect(value);
  };

  return (
    <Select onValueChange={handleSelect} defaultValue={value}>
      <SelectTrigger
        className={cn(s.trigger, { [`min-w-[${minWidth}]`]: minWidth })}
      >
        <Image
          src="/assets/icons/filter.svg"
          alt="Filter"
          width={24}
          height={24}
        />
        <SelectValue placeholder={placeholder} />
        <SelectIcon asChild>
          <Image
            src="/assets/icons/mingcute-down-line.svg"
            alt=""
            width={20}
            height={20}
          />
        </SelectIcon>
      </SelectTrigger>
      <SelectContent className={s.content}>
        {items.map(({ title, value }) => (
          <SelectItem className="cursor-pointer" value={value} key={value}>
            {title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
