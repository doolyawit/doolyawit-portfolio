import { useDrawerMenu } from '../../hooks/useDrawerMenu';
import FourDots from './svg/FourDots';

function DrawerToggleButton() {
  const { toggleDrawer } = useDrawerMenu();
  return (
    <div>
      <div onClick={() => toggleDrawer()}>
        <FourDots style="h-10 w-10 cursor-pointer" />
      </div>
    </div>
  );
}

export default DrawerToggleButton;
