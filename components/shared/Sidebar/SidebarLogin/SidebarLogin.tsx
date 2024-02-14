import React from 'react';
import { SignedOut } from '@clerk/nextjs';
import { SidebarLoginButton } from './SidebarLoginButton';

interface SidebarLoginProps {
  closable?: boolean;
}

export const SidebarLogin = ({ closable = false }: SidebarLoginProps) => {
  return (
    <SignedOut>
      <div className="mt-auto flex flex-col gap-3">
        <SidebarLoginButton
          classNames={{
            outer: 'btn-secondary',
            inner: 'primary-text-gradient',
          }}
          link="/sign-in"
          closable={closable}
        >
          Login
        </SidebarLoginButton>
        <SidebarLoginButton
          classNames={{
            outer: 'btn-tertiary light-border-2',
            inner: 'text-dark400_light900',
          }}
          link="/sign-un"
          closable={closable}
        >
          Signup
        </SidebarLoginButton>
      </div>
    </SignedOut>
  );
};
