'use client';

import Menu from './MenuItem';
import ToggleButton from './ToggleButton';
import SiteLogo from './SiteLogo';

function NavBar() {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About Me', link: '#about' },
    { label: 'Project', link: '#projects' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <div
      className={`inline-flex h-[138px] w-screen items-center justify-center gap-4 bg-beige p-4 dark:bg-gray`}
    >
      <SiteLogo logo="dY." height="106" />
      <ToggleButton />
      <Menu menuItems={menuItems} height="72" />
    </div>
  );
}

export default NavBar;
