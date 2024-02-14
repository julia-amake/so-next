import React, { Fragment, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import Image from 'next/image';

interface SidebarLoginButtonProps {
  children: string;
  icon: string;
  classNames?: { outer?: string; inner?: string };
  link: string;
  closable?: boolean;
}

export const SidebarLoginButton = (props: SidebarLoginButtonProps) => {
  const { children, icon, classNames, link, closable = false } = props;
  const Tag = closable ? SheetClose : Fragment;

  return (
    <Tag asChild>
      <Button asChild>
        <Link
          className={cn(
            'flex items-center justify-start gap-4 rounded-lg',
            classNames?.outer,
          )}
          href={link}
        >
          <Image
            className="invert-colors lg:hidden"
            src={icon}
            alt={children}
            width={20}
            height={20}
          />
          <span
            className={cn(
              'small-medium font-semibold max-lg:hidden',
              classNames?.inner,
            )}
          >
            {children}
          </span>
        </Link>
      </Button>
    </Tag>
  );
};
