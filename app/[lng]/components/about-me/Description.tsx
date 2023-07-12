import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function Description({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="break-words text-start font-st text-base font-extralight leading-6 md:text-justify lg:text-body lg:leading-7">
      {t('about_me.description_paragraph_1')}
      <p className="mt-5 lg:mt-6">{t('about_me.description_paragraph_2')}</p>
    </div>
  );
}
