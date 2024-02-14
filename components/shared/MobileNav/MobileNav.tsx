'use client';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarLogin, SidebarMenu } from '@/components/shared/Sidebar';

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="bg-none sm:hidden">
        <Image
          className="invert-colors"
          src="/assets/icons/hamburger.svg"
          alt="Hamburger menu"
          width={24}
          height={24}
        />
      </SheetTrigger>
      <SheetContent
        className="background-light900_dark200 flex flex-col border-none dark:text-light-900"
        side="left"
      >
        <SheetClose asChild type={undefined}>
          <Link href="/" className="flex items-center gap-1 pb-14">
            <Image
              src="/assets/images/site-logo.svg"
              width={24}
              height={24}
              alt="SO Next"
            />
            <div className="h3-semibold text-dark100_light900 pl-1 font-spaceGrotesk">
              so<span className="h3-bold text-primary-500">next</span>
            </div>
          </Link>
        </SheetClose>
        <SidebarMenu closable />
        <SidebarLogin closable />
      </SheetContent>
    </Sheet>
  );
};
