'use client'

import React from 'react';
import { usePathname } from 'next/navigation'
import HomeLayout from './homeLayout';
import DefaultLayout from './defaultLayout';

const LayoutWrapper = ({ children } : any) => {

  const pathname = usePathname();
  if (pathname == "/") {
    return <HomeLayout>{children}</HomeLayout>;
  }
  return <DefaultLayout>{children}</DefaultLayout>;
};

export default LayoutWrapper;
