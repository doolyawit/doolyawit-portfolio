'use client';
import SiteLogo from './SiteLogo';
import { TEXTS_LOGO } from '../../constants';
import DrawerToggleButton from './DrawerToggleButton';
import { MenuItem } from './NavMenuItem';
import DrawerMenuItem from './DrawerMenu';
import ToggleButton from './ToggleButton';

function NavBarMobileAndTablet({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <div className="flex h-fit w-full items-center justify-between selection:bg-green dark:selection:bg-orange md:justify-start">
      <SiteLogo textLogo={TEXTS_LOGO} height="60" />
      <div className="hidden md:flex md:flex-1">
        {' '}
        <ToggleButton />
      </div>

      <DrawerToggleButton />
      <DrawerMenuItem menuItems={menuItems} />
    </div>
  );
}

export default NavBarMobileAndTablet;
