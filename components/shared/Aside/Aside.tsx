import React from 'react';
import { HotQuestions } from '@/components/shared/HotQuestions';
import { PopularTags } from '@/components/shared/PopularTags';

export const Aside = () => {
  return (
    <aside className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col justify-between gap-14 overflow-y-auto border-l-1 p-6 pt-32 shadow-light-300 dark:border-none dark:shadow-none max-lg:hidden lg:w-[330px]">
      <HotQuestions />
      <PopularTags />
    </aside>
  );
};
