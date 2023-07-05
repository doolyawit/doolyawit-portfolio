import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import HireMeButton from './HireMeButton';

export default async function HireMe({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);
  return (
    <div>
      <p className="mb-6 px-32 py-2 text-center font-st text-body font-normal text-gray dark:text-beige">
        {t('lorem')}
      </p>
      <HireMeButton label={t('hire_me')} />
    </div>
  );
}
