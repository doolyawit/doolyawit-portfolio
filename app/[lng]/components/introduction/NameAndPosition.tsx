import StarSvg from './svg/StarSvg';
import Position from './Position';
import { BaseProp } from '../../../types';
import { useTranslation } from '../../../i18n';

export default async function NameAndPosition({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="h-full w-full">
      <Position greetingWord={t('greeting')} position={t('front_end')} department={t('developer')} />
      <div className="-mt-6 ml-[360px] flex w-full text-orange dark:text-green">
        <StarSvg width="58" height="58" />
      </div>
      <div className="flex w-full justify-center pt-16 font-jk text-head1 font-extrabold text-gray selection:bg-green dark:text-beige dark:selection:bg-orange">
        {t('doolyawit_yodkaew')}
      </div>
    </div>
  );
}
