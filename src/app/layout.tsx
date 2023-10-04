'use client'

import React from 'react';
import { usePathname } from 'next/navigation'
import HomeLayout from './homeLayout';
import DefaultLayout from './defaultLayout';

const LayoutWrapper = ({ children } : any) => {

  const pathname = usePathname();

  if (pathname == null) {
    return <DefaultLayout>{children}</DefaultLayout>;
  }

  if (pathname == "/" || pathname.startsWith("/api")) {
    return <HomeLayout>{children}</HomeLayout>;
  }
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default LayoutWrapper;
