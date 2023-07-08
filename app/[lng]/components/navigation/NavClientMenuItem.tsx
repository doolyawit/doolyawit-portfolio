'use client';

import { Link } from 'react-scroll';
import NavMenuItem, { MenuItem } from './NavMenuItem';

export default function NavClientMenuItem({ item }: { item: MenuItem }) {
  return (
    <Link href="#" className="cursor-pointer" to="home" spy={true} smooth={true} offset={0} duration={500}>
      <NavMenuItem item={item} />
    </Link>
  );
}
