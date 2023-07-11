import StarSvg from './svg/StarSvg';
import Position from './Position';
import { BaseProp } from '../../../types';
import { useTranslation } from '../../../i18n';

export default async function NameAndPosition({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className=" h-1/2 w-full xl:h-fit">
      <Position greetingWord={t('greeting')} position={t('front_end')} department={t('developer')} />
      <div className="ml-56 mt-2 flex w-full text-orange dark:text-green lg:ml-80 xl:-mt-6 xl:ml-[360px]">
        <StarSvg className="h-10 w-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14" />
      </div>
      <div className="flex w-full justify-center pt-4 text-center font-jk  text-5xl font-extrabold leading-normal text-gray selection:bg-green dark:text-beige dark:selection:bg-orange sm:px-20 sm:text-6xl sm:leading-relaxed lg:text-7xl lg:leading-relaxed xl:px-0 xl:pt-16 xl:text-head1">
        {t('doolyawit_yodkaew')}
      </div>
    </div>
  );
}
