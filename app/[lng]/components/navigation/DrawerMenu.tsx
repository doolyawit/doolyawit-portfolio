'use client';

import Drawer from '@mui/material/Drawer';
import { MenuItem } from './NavMenuItem';
import DrawerMenuItem from './DrawerMenuItem';
import { useDrawerMenu } from '../../hooks/useDrawerMenu';
import ToggleButton from './ToggleButton';

function DrawerMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const { drawerOpen, anchor, toggleDrawer } = useDrawerMenu();

  return (
    <div>
      <Drawer
        SlideProps={{
          timeout: 300,
        }}
        open={drawerOpen}
        anchor={anchor}
        onClose={() => {
          toggleDrawer();
        }}
        classes={{
          paper:
            'bg-beige dark:bg-gray text-gray dark:text-beige px-8 pb-14 pt-28 sm:pt-36 sm:pb-18 md:pt-44 md:pb-22 lg:pt-60 lg:pb-30 flex flex-col justify-between items-center dark:selection:bg-orange selection:bg-green',
        }}
      >
        <div className="flex flex-col gap-7">
          <DrawerMenuItem menuItems={menuItems} />
          <div className="md:hidden">
            <ToggleButton />
          </div>
        </div>
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="h-fit cursor-pointer text-5xl font-semibold lg:text-6xl"
        >
          &#10005;
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
