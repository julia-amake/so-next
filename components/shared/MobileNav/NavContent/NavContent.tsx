'use client';
import React from 'react';
import { SIDEBAR_LINKS } from '@/constants';
import { SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SidebarLink } from '@/types';

const NavContent = () => {
  const pathname = usePathname();

  const getLink = (link: SidebarLink) => {
    const { label, route, icon } = link;
    const isActive =
      (pathname.includes(route) && route.length > 1) || pathname === route;

    return (
      <SheetClose asChild key={label}>
        <Link
          className={cn(
            'flex items-center justify-start gap-4 bg-transparent p-4',
            {
              'primary-gradient rounded-lg text-light-900': isActive,
              'text-dark300_light900': !isActive,
            },
          )}
          href={route}
        >
          <Image
            className={cn({ 'invert-colors': !isActive })}
            src={icon}
            alt={label}
            width={20}
            height={20}
          />
          <p
            className={cn({
              'base-bold': isActive,
              'base-medium': !isActive,
            })}
          >
            {label}
          </p>
        </Link>
      </SheetClose>
    );
  };

  return (
    <div className="flex h-full flex-col gap-6">
      {SIDEBAR_LINKS.map((link) => getLink(link))}
    </div>
  );
};

export default NavContent;
