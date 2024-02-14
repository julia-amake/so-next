import React from 'react';
import { SidebarMenu } from '@/components/shared/Sidebar/SidebarMenu/SidebarMenu';
import { SidebarLogin } from '@/components/shared/Sidebar/SidebarLogin/SidebarLogin';

export const Sidebar = () => {
  return (
    <aside className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r-1 p-6 pt-32 shadow-light-300 dark:border-none dark:shadow-none max-sm:hidden lg:w-[266px]">
      <SidebarMenu />
      <SidebarLogin />
    </aside>
  );
};
