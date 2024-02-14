'use client';
import React from 'react';
import { SIDEBAR_LINKS } from '@/constants';
import { SheetClose } from '@/components/ui/sheet';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { SidebarLink } from '@/types';

interface SidebarMenuProps {
  closable?: boolean;
}

export const SidebarMenu = (props: SidebarMenuProps) => {
  const { closable = false } = props;
  const pathname = usePathname();

  const getLink = (link: SidebarLink) => {
    const { label, route, icon } = link;
    const isActive =
      (pathname.includes(route) && route.length > 1) || pathname === route;

    return (
      <Link
        className={cn(
          'flex items-center justify-start gap-4 bg-transparent p-4',
          {
            'primary-gradient rounded-lg text-light-900': isActive,
            'text-dark300_light900': !isActive,
          },
        )}
        href={route}
        {...(closable ? { key: label } : {})}
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
    );
  };

  return (
    <div className="flex flex-col gap-5">
      {SIDEBAR_LINKS.map((link) =>
        closable ? (
          <SheetClose asChild type={undefined} key={link.label}>
            {getLink(link)}
          </SheetClose>
        ) : (
          getLink(link)
        ),
      )}
    </div>
  );
};
