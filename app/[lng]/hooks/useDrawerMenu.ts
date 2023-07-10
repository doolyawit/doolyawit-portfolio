import { useContext } from 'react';
import { DrawerMenuContext } from '../contexts/DrawerMenuProvider';

export const useDrawerMenu = () => {
  return useContext(DrawerMenuContext);
};
