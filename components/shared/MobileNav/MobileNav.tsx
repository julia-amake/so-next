import React from 'react';

import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import NavContent from '@/components/shared/MobileNav/NavContent/NavContent';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

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
        className="background-light900_dark200 border-none dark:text-light-900"
        side="left"
      >
        <SheetClose asChild>
          <Link href="/" className="flex items-center gap-1 pb-14">
            <Image src="/assets/images/site-logo.svg" width={24} height={24} alt="SO Next" />
            <div className="h3-semibold text-dark100_light900 pl-1 font-spaceGrotesk">
              so<span className="h3-bold text-primary-500">next</span>
            </div>
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <NavContent />
        </SheetClose>
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Button asChild>
                <Link className="btn-secondary rounded-lg" href="/sign-in">
                  <span className="primary-text-gradient small-medium">Login</span>
                </Link>
              </Button>
            </SheetClose>
            <SheetClose asChild>
              <Button asChild>
                <Link className="btn-tertiary light-border-2 rounded-lg" href="/sign-up">
                  <span className="small-medium text-dark400_light900">Signup</span>
                </Link>
              </Button>
            </SheetClose>
          </div>
        </SignedOut>
      </SheetContent>
    </Sheet>
  );
};
