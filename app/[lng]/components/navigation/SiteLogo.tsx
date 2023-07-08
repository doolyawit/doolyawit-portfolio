'use client';

import { scroller } from 'react-scroll';

interface SiteLogoProps {
  textLogo: string;
  height?: string;
}

export default function SiteLogo({ textLogo = 'dY.', height }: SiteLogoProps) {
  return (
    <div className={`flex h-[${height}px] flex-1 items-start justify-start py-4`}>
      <div
        className="cursor-pointer font-jk text-head1 font-extrabold text-gray dark:text-beige"
        onClick={() => {
          window.location.hash = '';
          scroller.scrollTo('home', {
            duration: 500,
            smooth: true,
            offset: 0,
          });
        }}
      >
        {textLogo}
      </div>
    </div>
  );
}
