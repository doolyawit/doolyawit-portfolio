import { Drawer } from '@mui/material';
import { MenuItem } from './NavMenuItem';
import DrawerMenuItem from './DrawerMenuItem';
import { useDrawerMenu } from '../../hooks/useDrawerMenu';
import ToggleButton from './ToggleButton';

function DrawerMenu({ menuItems }: { menuItems: MenuItem[] }) {
  const { drawerOpen, anchor, toggleDrawer } = useDrawerMenu();
  return (
    <div>
      <Drawer
        open={drawerOpen}
        anchor={anchor}
        onClose={() => {
          toggleDrawer();
        }}
        classes={{
          paper:
            'bg-beige dark:bg-gray text-gray dark:text-beige h-screen px-8 pb-16 pt-32 flex flex-col justify-between items-center gap-10 dark:selection:bg-orange selection:bg-green',
        }}
      >
        <div className="flex flex-col gap-7">
          <DrawerMenuItem menuItems={menuItems} />
          <ToggleButton />
        </div>
        <div
          onClick={() => {
            toggleDrawer();
          }}
          className="h-fit cursor-pointer text-5xl font-semibold"
        >
          &#10005;
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerMenu;
