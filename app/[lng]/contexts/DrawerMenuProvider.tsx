'use client';

import React, { useState } from 'react';
import { createContext } from 'react';
import { Direction } from '../../types';

interface DrawerMenuContextProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
  anchor: Direction;
}

export const DrawerMenuContext = createContext<DrawerMenuContextProps>({} as DrawerMenuContextProps);

function DrawerMenuProvider({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    return setDrawerOpen(!drawerOpen);
  };
  const anchor = 'top';

  return (
    <DrawerMenuContext.Provider value={{ drawerOpen, toggleDrawer, anchor }}>{children}</DrawerMenuContext.Provider>
  );
}
export default DrawerMenuProvider;
