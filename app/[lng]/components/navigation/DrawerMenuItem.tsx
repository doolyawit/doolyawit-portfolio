import { Link } from 'react-scroll';
import { MenuItem } from './NavMenuItem';
import { useDrawerMenu } from '../../hooks/useDrawerMenu';

function DrawerMenuItem({ menuItems }: { menuItems: MenuItem[] }) {
  const { toggleDrawer } = useDrawerMenu();
  return (
    <div className="flex h-fit flex-col gap-12 text-center font-jk text-4xl font-semibold md:text-5xl lg:gap-16 lg:text-6xl">
      {menuItems.map((item, index) => {
        if (index === 0) {
          return (
            <Link
              href="#"
              key={index}
              to="home"
              spy={true}
              smooth={true}
              offset={index === menuItems.length - 1 ? 0 : -160}
              duration={500}
              onClick={() => {
                toggleDrawer();
              }}
              className="hover:text-orange dark:hover:text-green"
            >
              {item.label}
            </Link>
          );
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
            onClick={() => {
              toggleDrawer();
            }}
            className="hover:text-orange dark:hover:text-green"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default DrawerMenuItem;
