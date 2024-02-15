import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TagProps {
  id: number;
  name: string;
  usagesCount?: number;
}

export const Tag = (props: TagProps) => {
  const { id, name, usagesCount = 0 } = props;

  return (
    <Link
      className={cn({
        'flex items-center justify-between': usagesCount,
        'inline-block': !usagesCount,
      })}
      href={`/tags/${id}`}
    >
      <span className="subtle-medium text-light400_light500 background-light800_dark300 inline-block rounded-md px-4 py-2 uppercase">
        {name}
      </span>
      {!!usagesCount && (
        <span className="small-medium text-dark500_light700">
          {usagesCount}
        </span>
      )}
    </Link>
  );
};
