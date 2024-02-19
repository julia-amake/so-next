import React from 'react';
import { cn } from '@/lib/utils';
import s from './Metric.module.css';
import Image from 'next/image';
import { compactNumber } from '@/lib/utils/compactNumber/compactNumber';

interface MetricProps {
  icon: string;
  value: number;
  title: string;
  className?: string;
}

export const Metric = (props: MetricProps) => {
  const { icon, value, title, className } = props;
  return (
    <div className={cn(s.outer, className)}>
      <Image className={s.icon} src={icon} alt={title} width={16} height={16} />
      <span className={s.value}>{compactNumber(value)} </span>
      <span className={s.title}>{title}</span>
    </div>
  );
};
