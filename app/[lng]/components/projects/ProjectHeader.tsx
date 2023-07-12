import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import Flower from './svg/Flower';

export default async function ProjectHeader({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex w-full items-start justify-between border-b pb-2 sm:pb-4 lg:pb-6 xl:pb-10">
      <div className="flex gap-4 self-center pb-2 font-jk text-4xl font-extrabold lg:text-5xl xl:pb-8 xl:text-7xl">
        <div className="flex self-end">{t('project.title')}</div>
        <div className="flex self-end text-orange dark:text-green">
          <Flower width="4rem" height="4rem" className="h-10 w-10 lg:h-14 lg:w-14 xl:h-16 xl:w-16" />
        </div>
      </div>
      <div className="self-end font-st text-xs font-light text-gray dark:text-beige sm:text-sm lg:text-lg xl:text-xl">
        {t('project.what_i_do')}
      </div>
    </div>
  );
}
