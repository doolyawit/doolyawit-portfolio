import NavMenu from './NavMenu';
import ToggleButton from './ToggleButton';
import SiteLogo from './SiteLogo';
import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';

export default async function NavBar({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  const menuItems = [
    { label: t('nav_bar.home'), link: '#' },
    { label: t('nav_bar.about_me'), link: 'about' },
    { label: t('nav_bar.project'), link: 'projects' },
    { label: t('nav_bar.contact'), link: 'contact' },
  ];

  return (
    <div
      className={
        'fixed left-0 right-0 top-0 z-50 col-span-12 col-start-1 row-span-1 row-start-1 inline-flex h-fit w-screen items-center justify-center gap-4 bg-beige px-8 py-4 transition-all duration-300 selection:bg-green dark:bg-gray dark:selection:bg-orange'
      }
    >
      <SiteLogo textLogo="dY." height="106" />
      <ToggleButton />
      <NavMenu menuItems={menuItems} height="72" />
    </div>
  );
}
