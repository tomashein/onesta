import { createContext, useCallback, useMemo, useState } from 'react';

type Drawer = {
  title: string;
  component: () => JSX.Element;
  callback?: () => void;
};

type ContextType = {
  drawer: Drawer;
  openDrawer: (drawer: Drawer) => void;
  closeDrawer: () => void;
};

const initialState = {
  drawer: {
    title: '',
    component: () => <></>
  },
  openDrawer: (drawer: Drawer) => {},
  closeDrawer: () => {}
};

export const DrawerContext = createContext<ContextType>(initialState);

export const DrawerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [drawer, setDrawer] = useState<Drawer>(initialState.drawer);

  const openDrawer = useCallback((newDrawer: Drawer) => setDrawer(newDrawer), []);

  const closeDrawer = useCallback(() => setDrawer(initialState.drawer), [setDrawer]);

  const contextValue = useMemo(
    () => ({
      drawer,
      openDrawer,
      closeDrawer
    }),
    [drawer, openDrawer, closeDrawer]
  );

  return <DrawerContext.Provider value={contextValue}>{children}</DrawerContext.Provider>;
};
