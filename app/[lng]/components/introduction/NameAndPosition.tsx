import StarSvg from './svg/StarSvg';
import Position from './Position';
import { BaseProp } from '../../../types';
import { useTranslation } from '../../../i18n';

export default async function NameAndPosition({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 justify-start">
        <Position greetingWord={t('greeting')} position={t('front_end')} department={t('developer')} />
      </div>
      <div className="absolute left-1/3 top-1/3 z-40 text-orange dark:text-green">
        <StarSvg width="58" height="58" />
      </div>
      <div className="flex h-full w-full items-center justify-center font-jk text-head1 font-extrabold text-gray selection:bg-green dark:text-beige dark:selection:bg-orange">
        {t('doolyawit_yodkaew')}
      </div>
    </div>
  );
}
