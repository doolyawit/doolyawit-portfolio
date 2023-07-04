import Link from 'next/link';
import PlusSvg from './svg/PlusSvg';

function HireMeButton() {
  return (
    <button className="hover-dark:text-gray mx-auto inline-flex h-fit items-center gap-[12px] rounded-full border px-8 py-2 font-jk text-caption font-medium text-gray hover:border-none hover:bg-yellow dark:text-beige">
      <Link href={'#contact'}>Hire Me</Link>
      <div className="text-green dark:text-orange">
        <PlusSvg width="22" height="22" />
      </div>
    </button>
  );
}

export default HireMeButton;
