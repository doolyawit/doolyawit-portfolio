'use client';

import { MenuItem } from '../navigation/NavMenuItem';

interface Props {
  menuItems: MenuItem[];
}
export default function ContactMenuItem({ menuItems }: Props) {
  return (
    <div className={`flex h-1/2 w-full flex-1 content-end  justify-center gap-10 p-4`}>
      {menuItems.map((item, index) => {
        return (
          <a
            href={item.link}
            key={index}
            target="_blank"
            rel="noreferrer"
            className="font-jk text-2xl font-medium text-decoration text-decoration-underline text-decoration-dashed text-decoration-gray text-decoration-2 hover:text-decoration-green dark:text-decoration-beige dark:hover:text-decoration-yellow"
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
