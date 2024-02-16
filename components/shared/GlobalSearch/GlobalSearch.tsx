'use client';
import React from 'react';
import { Search } from '@/components/shared/Search';

export const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <Search
        placeholder="Search anything globally"
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
};
