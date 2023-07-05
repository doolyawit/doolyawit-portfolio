'use client';
import NavMenuItem, { MenuItem } from './NavMenuItem';
import NavClientMenuItem from './NavClientMenuItem';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

interface Props {
  menuItems: MenuItem[];
  height: string;
}

export default function NavMenu({ menuItems, height }: Props) {
  return (
    <div className={`flex h-[${height}px] w-1/3 flex-1 gap-2 p-4`}>
      {menuItems.map((item, index) => {
        if (index === 0) {
          return <NavClientMenuItem key={index} item={item} />;
        }
        return (
          <Link key={index} to={item.link} spy={true} smooth={true} offset={50} duration={500}>
            <NavMenuItem item={item} />
          </Link>
        );
      })}
    </div>
  );
}
