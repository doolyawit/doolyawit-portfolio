import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function Name({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="relative h-1/3 text-center font-st text-2xl font-normal leading-normal md:text-right lg:text-title lg:leading-relaxed">
      {t('about_me.greeting')}
      <br />
      <span className="underline-offset-2 text-decoration text-decoration-underline text-decoration-wavy text-decoration-green text-decoration-2 dark:text-decoration-orange md:underline-offset-4 lg:underline-offset-[10px] lg:text-decoration-4">
        {t('about_me.position')}
      </span>{' '}
      {t('developer')}
    </div>
  );
}
