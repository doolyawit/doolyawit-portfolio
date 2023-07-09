'use client';

import { Link } from 'react-scroll';
import PlusSvg from './svg/PlusSvg';
import Oval from './svg/OvalBorder';

export default function HireMeButton({ label }: { label: string }) {
  return (
    <div className="mt-12 flex w-full justify-center">
      <div className="group relative w-[164px]">
        <div className="absolute h-full w-full">
          <div className="flex h-full w-full items-center justify-center">
            <Link
              href={'#contact'}
              to={'contact'}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover-dark:text-gray flex h-full w-full items-center justify-center gap-[10px] font-jk text-caption font-medium text-gray dark:text-beige"
            >
              <p>{label}</p>
              <div className="text-green dark:text-orange">
                <PlusSvg width="22" height="22" />
              </div>
            </Link>
          </div>
        </div>
        <Oval />
      </div>
    </div>
  );
}
