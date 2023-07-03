import React from 'react';
interface SiteLogoProps {
  logo: string;

  height?: string;
}

function SiteLogo({ logo = 'dY.', height }: SiteLogoProps) {
  return (
    <div
      className={`flex h-[${height}px] w-1/3 flex-1 shrink grow basis-0 items-start justify-start gap-2.5 p-4`}
    >
      <div className="font-jk text-head1 font-extrabold text-gray dark:text-beige">
        {logo}
      </div>
    </div>
  );
}

export default SiteLogo;
