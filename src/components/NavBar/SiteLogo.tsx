import React from 'react';
interface SiteLogoProps {
  logo: string;
  width?: string;
  height?: string;
}

function SiteLogo({ logo = 'dY.', width, height }: SiteLogoProps) {
  return (
    <div
      className={`flex h-[${height}px] w-[${width}px] shrink grow basis-0 items-start justify-start gap-2.5 p-4`}
    >
      <div className="font-jk text-head1 font-extrabold leading-10 text-gray">
        {logo}
      </div>
    </div>
  );
}

export default SiteLogo;
