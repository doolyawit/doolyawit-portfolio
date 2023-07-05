import Link from 'next/link';
import NavMenuItem, { MenuItem } from './NavMenuItem';
import NavClientMenuItem from './NavClientMenuItem';

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
          <Link key={index} href={item.link}>
            <NavMenuItem item={item} />
          </Link>
        );
      })}
    </div>
  );
}
