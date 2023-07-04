import Menu from './MenuItem';
import ToggleButton from './ToggleButton';
import SiteLogo from './SiteLogo';
import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function NavBar({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  const menuItems = [
    { label: t('nav_bar.home'), link: '/' },
    { label: t('nav_bar.about_me'), link: '#about' },
    { label: t('nav_bar.project'), link: '#projects' },
    { label: t('nav_bar.contact'), link: '#contact' },
  ];

  return (
    <div className={'inline-flex h-[138px] w-screen items-center justify-center gap-4 bg-beige p-4 dark:bg-gray'}>
      <SiteLogo logo="dY." height="106" />
      <ToggleButton />
      <Menu menuItems={menuItems} height="72" />
    </div>
  );
}
