'use client';
import SiteLogo from './SiteLogo';
import { TEXTS_LOGO } from '../../constants';
import DrawerToggleButton from './DrawerToggleButton';
import { MenuItem } from './NavMenuItem';
import DrawerMenuItem from './DrawerMenu';

function NavBarMobile({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <div className="flex h-fit w-full items-center justify-between selection:bg-green dark:selection:bg-orange">
      <SiteLogo textLogo={TEXTS_LOGO} height="60" />
      <DrawerToggleButton />
      <DrawerMenuItem menuItems={menuItems} />
    </div>
  );
}

export default NavBarMobile;
