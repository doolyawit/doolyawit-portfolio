'use client';

import NavMenuItem, { MenuItem } from './NavMenuItem';
import NavClientMenuItem from './NavClientMenuItem';
import { Link } from 'react-scroll';

interface Props {
  menuItems: MenuItem[];
  height: string;
}

export default function NavMenu({ menuItems, height }: Props) {
  return (
    <div className={`flex h-[${height}px] flex-1 items-center justify-end`}>
      {menuItems.map((item, index) => {
        if (index === 0) {
          return <NavClientMenuItem key={index} item={item} />;
        }
        return (
          <Link
            href="#"
            key={index}
            to={item.link}
            spy={true}
            smooth={true}
            offset={index === menuItems.length - 1 ? 0 : -160}
            duration={500}
          >
            <NavMenuItem item={item} />
          </Link>
        );
      })}
    </div>
  );
}
