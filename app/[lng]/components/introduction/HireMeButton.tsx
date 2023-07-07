'use client';
import { Link } from 'react-scroll';
import PlusSvg from './svg/PlusSvg';

export default function HireMeButton({ label }: { label: string }) {
  return (
    <Link
      href={'#contact'}
      to={'contact'}
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      className="hover-dark:text-gray mx-auto inline-flex h-fit items-center gap-[12px] rounded-full border px-8 py-2 font-jk text-caption font-medium text-gray hover:border-yellow hover:bg-yellow dark:text-beige"
    >
      <p>{label}</p>
      <div className="text-green dark:text-orange">
        <PlusSvg width="22" height="22" />
      </div>
    </Link>
  );
}
