import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

export const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="border-1 dark:border-none background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          className="cursor-pointer"
          src="/assets/icons/search.svg"
          alt="Search"
          width={24}
          height={24}
        />
        <Input
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none bg-transparent"
          type="text"
          placeholder="Search anything globally"
          value=""
        />
      </div>
    </div>
  );
};
