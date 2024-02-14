import React, { ReactNode } from 'react';
import Navbar from '@/components/shared/Navbar/Navbar';
import { Sidebar } from '@/components/shared/Sidebar/Sidebar';

interface BaseLayoutProps {
  children: ReactNode;
}

function BaseLayout(props: BaseLayoutProps) {
  const { children } = props;

  return (
    <div className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex min-h-screen flex-1 flex-col pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </main>
        Right Sidebar
      </div>
      Toaster
    </div>
  );
}

export default BaseLayout;
