import Link from 'next/link';
import React from 'react';

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
            className="h-10 w-[90px] text-center font-jk text-menu font-medium  text-gray"
          >
            <Link href={item.link}>{item.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
