'use client';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import s from './ButtonSelect.module.css';

interface ButtonsSelectProps {
  items: { title: string; value: string }[];
  selected?: string;
  onSelect: (value: string) => void;
  className?: string;
}

export const ButtonsSelect = (props: ButtonsSelectProps) => {
  const { className, items, selected, onSelect } = props;
  const [current, setCurrent] = useState(selected);

  const handleSelect = (value: string) => () => {
    setCurrent(value);
    onSelect(value);
  };

  return (
    <div className={cn(s.outer, className)}>
      {items.map(({ title, value }) => (
        <Button
          className={cn(s.btn, { [s.btn_selected]: current === value })}
          key={value}
          onClick={handleSelect(value)}
        >
          <span className={cn({ 'primary-text-gradient': current === value })}>
            {title}
          </span>
        </Button>
      ))}
    </div>
  );
};
