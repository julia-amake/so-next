import React, { Fragment, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';

interface SidebarLoginButtonProps {
  children: ReactNode;
  classNames?: { outer?: string; inner?: string };
  link: string;
  closable?: boolean;
}

export const SidebarLoginButton = (props: SidebarLoginButtonProps) => {
  const { children, classNames, link, closable = false } = props;
  const Tag = closable ? SheetClose : Fragment;

  return (
    <Tag asChild>
      <Button asChild>
        <Link className={cn('rounded-lg', classNames?.outer)} href={link}>
          <span className={cn('small-medium', classNames?.inner)}>
            {children}
          </span>
        </Link>
      </Button>
    </Tag>
  );
};
