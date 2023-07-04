'use client';

interface SiteLogoProps {
  textLogo: string;
  height?: string;
}

export default function SiteLogo({ textLogo = 'dY.', height }: SiteLogoProps) {
  return (
    <div className={`flex h-[${height}px] w-1/3 flex-1 shrink grow basis-0 items-start justify-start gap-2.5 p-4`}>
      <div
        className="cursor-pointer font-jk text-head1 font-extrabold text-gray dark:text-beige"
        onClick={() => {
          window.location.hash = '';
        }}
      >
        {textLogo}
      </div>
    </div>
  );
}
