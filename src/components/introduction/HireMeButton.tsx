import Link from 'next/link';
import React from 'react';
import PlusSvg from './svg/PlusSvg';

function HireMeButton() {
  return (
    <button className="mx-auto  inline-flex h-fit items-center gap-[12px] rounded-full border px-8 py-2 font-jk text-caption font-medium text-gray">
      <Link href={'#contact'}>Hire Me</Link>
      <PlusSvg color="#14D87A" width="22" height="22" />
    </button>
  );
}

export default HireMeButton;
