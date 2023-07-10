import NavMenu from './NavMenu';
import ToggleButton from './ToggleButton';
import SiteLogo from './SiteLogo';
import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import { TEXTS_LOGO } from '../../constants';
import NavBarMobile from './NavBarMobile';

export default async function NavBar({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  const menuItems = [
    { label: t('nav_bar.home'), link: '#' },
    { label: t('nav_bar.about_me'), link: 'about' },
    { label: t('nav_bar.project'), link: 'projects' },
    { label: t('nav_bar.contact'), link: 'contact' },
  ];

  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 hidden h-fit w-full items-center justify-center gap-4 bg-beige px-8 py-4 transition-all duration-300 selection:bg-green dark:bg-gray dark:selection:bg-orange xl:flex">
        <div className={'flex h-fit w-full max-w-7xl justify-between'}>
          <SiteLogo textLogo={TEXTS_LOGO} height="106" />
          <ToggleButton />
          <NavMenu menuItems={menuItems} height="72" />
        </div>
      </div>
      <div className="fixed left-0 right-0 top-0 z-50 flex h-fit w-full items-center justify-center bg-beige px-8 py-4 transition-all duration-300 dark:bg-gray xl:hidden 2xl:hidden 3xl:hidden">
        <NavBarMobile menuItems={menuItems} />
      </div>
    </div>
  );
}
