import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function Name({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="relative h-1/3 text-right font-st text-base font-normal leading-snug xl:text-title">
      {t('about_me.greeting')}
      <br />
      <span className="underline-offset-[10px] text-decoration text-decoration-underline text-decoration-wavy text-decoration-green text-decoration-4 dark:text-decoration-orange">
        {t('about_me.position')}
      </span>{' '}
      {t('developer')}
    </div>
  );
}
