import { useDrawerMenu } from '../../hooks/useDrawerMenu';
import FourDots from './svg/FourDots';

function DrawerToggleButton() {
  const { toggleDrawer } = useDrawerMenu();
  return (
    <div className="md:flex md:flex-1 md:justify-end">
      <div onClick={() => toggleDrawer()}>
        <FourDots style="h-10 w-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default DrawerToggleButton;
