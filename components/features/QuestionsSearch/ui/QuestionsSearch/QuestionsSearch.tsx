'use client';
import React from 'react';
import { Search } from '@/components/shared/Search';

export const QuestionsSearch = () => {
  return (
    <Search
      placeholder="Search for Questions Here..."
      onSearch={(value) => console.log(value)}
    />
  );
};
