'use client';

import NavMenuItem, { MenuItem } from './NavMenuItem';

export default function NavClientMenuItem({ item }: { item: MenuItem }) {
  return (
    <a
      className="cursor-pointer"
      onClick={() => {
        window.location.hash = '';
      }}
    >
      <NavMenuItem item={item} />
    </a>
  );
}
