import React from 'react';
import SiteLogo from '@/components/NavBar/SiteLogo';
import Menu from './MenuItem';
import ToggleButton from './ToggleButton';
interface NavBarProps {
  height?: string;
  width?: string;
}
function NavBar({ height, width }: NavBarProps) {
  const menuItems = [
    { label: 'Home', link: '/' },
    { label: 'About Me', link: '/about' },
    { label: 'Project', link: '/projects' },
    { label: 'Contact', link: '/contact' },
  ];
  return (
    <div
      className={`bg-beige inline-flex h-[${height}px] w-[${width}px] items-center justify-center gap-4 p-4`}
    >
      <SiteLogo logo="dY." height="106" width="405.33" />

      <ToggleButton />
      <Menu menuItems={menuItems} width="405.33" height="72" />
    </div>
  );
}

export default NavBar;
