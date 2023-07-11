import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import HireMeButton from './HireMeButton';

export default async function HireMe({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);
  return (
    <div className="mt-6 sm:mt-12 md:mt-16 xl:mt-[40px]">
      <p className="mb-2 px-8 py-2 text-center font-st text-base font-normal text-gray dark:text-beige sm:px-28 sm:text-xl md:mb-16 md:px-32 lg:px-44 lg:text-2xl xl:px-48 xl:text-body">
        {t('lorem')}
      </p>
      <HireMeButton label={t('hire_me')} />
    </div>
  );
}
