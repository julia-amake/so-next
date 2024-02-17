'use client';
import React from 'react';
import { QUESTIONS_FILTERS } from '@/constants';
import { CustomSelect } from '@/components/shared/CustomSelect';
import { ButtonsSelect } from '@/components/shared/ButtonsSelect';
import { useMediaQuery } from '@/lib/hooks/useMediaQuery';

export const QuestionsFilter = () => {
  const isMobile = useMediaQuery({ width: 'md', direction: 'max' });

  if (isMobile)
    return (
      <CustomSelect
        title="Select a Filter"
        items={QUESTIONS_FILTERS}
        onSelect={(value) => console.log(value)}
      />
    );

  return (
    <ButtonsSelect
      selected="newest"
      items={QUESTIONS_FILTERS}
      onSelect={(value) => console.log(value)}
    />
  );
};
