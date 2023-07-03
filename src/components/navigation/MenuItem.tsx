import Link from 'next/link';
import React from 'react';
import HoverLineSvg from './svg/HoverLineSvg';

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  height: string;
}

const Menu: React.FC<Props> = ({ menuItems, height }) => {
  //TODO: menu hover effect
  return (
    <div
      className={`flex h-[${height}px] w-1/3 flex-1 items-center justify-center gap-2 p-4`}
    >
      <div className="flex space-x-4">
        {menuItems.map((item) => (
          <div
            key={item.link}
            className="group h-10 w-[90px] text-center font-jk text-menu font-medium text-gray"
          >
            <Link href={item.link}>{item.label}</Link>
            <HoverLineSvg
              color="ffda58"
              width="70"
              height="24"
              className="invisible mx-auto group-hover:visible"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
