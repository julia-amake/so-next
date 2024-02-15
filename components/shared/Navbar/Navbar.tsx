import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import ThemeSwitcher from '@/components/shared/ThemeSwitcher/ThemeSwitcher';
import { MobileNav } from '@/components/shared/MobileNav';
import { GlobalSearch } from '@/components/shared/GlobalSearch';

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 light-border fixed z-50 w-full gap-5 border-b-1 p-5 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={32}
          height={32}
          alt="SO Next"
        />
        <div className="h2-semibold pl-1 font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          so<span className="h2-bold text-primary-500">next</span>
        </div>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-4">
        <ThemeSwitcher />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
