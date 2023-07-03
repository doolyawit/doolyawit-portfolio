import Link from 'next/link';
import React, { useContext } from 'react';
import PlusSvg from './svg/PlusSvg';
import { ThemeContext } from '@/contexts/ThemeContext';

function HireMeButton() {
  const { theme } = useContext(ThemeContext);
  return (
    <button className="hover-dark:text-gray  mx-auto inline-flex h-fit items-center gap-[12px] rounded-full border px-8 py-2 font-jk text-caption font-medium text-gray hover:border-none hover:bg-yellow dark:text-beige">
      <Link href={'#contact'}>Hire Me</Link>
      <PlusSvg color={theme ? '#f36336' : '#14D87A'} width="22" height="22" />
    </button>
  );
}

export default HireMeButton;
