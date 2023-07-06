'use client';

import { Link } from 'react-scroll';
import NavMenuItem, { MenuItem } from './NavMenuItem';

export default function NavClientMenuItem({ item }: { item: MenuItem }) {
  return (
    <Link
      className="cursor-pointer"
      onClick={() => {
        window.location.hash = '';
      }}
      to="home"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
    >
      <NavMenuItem item={item} />
    </Link>
  );
}
