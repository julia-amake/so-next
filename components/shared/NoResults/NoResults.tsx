'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeProvider';
import Image from 'next/image';
import s from './NoResults.module.css';
import Link from 'next/link';

interface NoResultsLink {
  title: string;
  link: string;
}

interface NoResultsProps {
  title?: string;
  description?: string;
  link?: NoResultsLink;
}

export const NoResults = (props: NoResultsProps) => {
  const { title = 'There’s no items to show', description, link } = props;
  const { mode } = useTheme();
  const isLight = mode === 'light';

  if (!mode) return;

  return (
    <div className={s.outer}>
      <Image
        className={s.pic}
        src={`/assets/images/noresults-${isLight ? 'light' : 'dark'}.png`}
        alt="No results"
        width={270}
        height={200}
      />
      <h3 className={s.title}>{title}</h3>
      {description && <p className={s.desc}>{description}</p>}
      {link && (
        <Link className={s.btn} href={link.link}>
          {link.title}
        </Link>
      )}
    </div>
  );
};
