import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import HireMeButton from './HireMeButton';

export default async function HireMe({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);
  return (
    <div className="mt-[40px] selection:bg-green dark:selection:bg-orange">
      <p className="mb-4 px-48 py-2 text-center font-st text-body font-normal text-gray dark:text-beige">
        {t('lorem')}
      </p>
      <HireMeButton label={t('hire_me')} />
    </div>
  );
}
