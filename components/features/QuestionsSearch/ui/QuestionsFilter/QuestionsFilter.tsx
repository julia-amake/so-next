'use client';
import React from 'react';
import { QUESTIONS_FILTERS } from '@/constants';
import { CustomSelect } from '@/components/shared/CustomSelect';
import { ButtonsSelect } from '@/components/shared/ButtonsSelect';

export const QuestionsFilter = () => {
  return (
    <>
      <CustomSelect
        title="Select a Filter"
        items={QUESTIONS_FILTERS}
        onSelect={(value) => console.log(value)}
      />
      <ButtonsSelect
        selected="newest"
        items={QUESTIONS_FILTERS}
        onSelect={(value) => console.log(value)}
      />
    </>
  );
};
