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
      className={`fixed left-0 right-0 top-0 z-50 inline-flex h-full w-screen items-center justify-center gap-4 bg-beige p-4  dark:bg-gray	`}
    >
      <SiteLogo logo="dY." height="106" />
      <ToggleButton />
      <Menu menuItems={menuItems} height="72" />
    </div>
  );
}

export default NavBar;
