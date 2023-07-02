import React from 'react';

interface MenuItem {
  label: string;
  link: string;
}

interface Props {
  menuItems: MenuItem[];
  width?: string;
  height?: string;
}

const Menu: React.FC<Props> = ({ menuItems, width, height }) => {
  return (
    <div
      className={`flex h-[${height}px] w-[${width}px]  items-center justify-center gap-2 p-4`}
    >
      <div className="flex space-x-4">
        {menuItems.map((item) => (
          <div
            key={item.link}
            className="h-10 w-[90px] text-center font-jk text-menu font-medium leading-tight text-gray"
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
