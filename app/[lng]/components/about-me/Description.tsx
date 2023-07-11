import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function Description({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="break-words text-left font-st text-xs font-thin leading-3 xl:text-justify xl:text-body xl:leading-7">
      {t('about_me.description_paragraph_1')}
      <p className="mt-6">{t('about_me.description_paragraph_2')}</p>
    </div>
  );
}
