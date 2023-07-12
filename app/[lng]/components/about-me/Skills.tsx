import SkillsLabel from './SkillsLabel';
import SkillsIcon from './SkillsIcon';
import { BaseProp } from '../../../types';
import { useTranslation } from '../../../i18n';

export default async function Skills({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="mb-8 mt-8  md:mt-20 lg:mt-20 xl:mt-4">
      <SkillsLabel label={t('about_me.skill')} />
      <SkillsIcon />
    </div>
  );
}
