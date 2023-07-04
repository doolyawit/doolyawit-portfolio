import StarSvg from './svg/StarSvg';
import Position from './Position';
import { BaseProp } from '../../../types';
import { useTranslation } from '../../../i18n';

export default async function NameAndPosition({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="relative col-span-10 col-start-2 row-span-2 grid h-[456px] w-[1064px] grid-cols-10 grid-rows-1 bg-beige dark:bg-gray">
      <div className="col-span-10 row-span-3 grid grid-cols-10 grid-rows-3">
        <Position greetingWord={t('greeting')} position={t('front_end')} department={t('developer')} />
      </div>
      <div className="absolute left-[340px] top-[220px] z-50 text-orange dark:text-green">
        <StarSvg width="58" height="58" />
      </div>
      <div className="col-span-10 col-start-1 row-span-1 flex h-[218px] w-[1064px] items-center justify-center text-center font-jk text-head1 font-extrabold text-gray dark:text-beige">
        {t('doolyawit_yodkaew')}
      </div>
    </div>
  );
}
