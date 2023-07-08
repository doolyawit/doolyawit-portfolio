import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import Flower from './svg/Flower';

export default async function ProjectHeader({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex w-full items-start justify-between border-b pb-10">
      <div className="flex gap-4 self-center pb-8 font-jk text-7xl font-extrabold">
        <div className="flex self-end">{t('project.title')}</div>
        <div className="flex self-end text-orange dark:text-green">
          <Flower width="4rem" height="4rem" />
        </div>
      </div>
      <div className="self-end font-st text-xl font-light text-beige">{t('project.what_i_do')}</div>
    </div>
  );
}
