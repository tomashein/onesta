import { createContext, useCallback, useMemo, useState } from 'react';

const initialState = {
  showMenu: false,
  toggleMenu: () => {},
  closeMenu: () => {}
};

export const MenuContext = createContext(initialState);

export const MenuProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => (showMenu ? setShowMenu(false) : setShowMenu(true)), [showMenu]);

  const closeMenu = useCallback(() => setShowMenu(false), [setShowMenu]);

  const contextValue = useMemo(
    () => ({
      showMenu,
      toggleMenu,
      closeMenu
    }),
    [showMenu, toggleMenu, closeMenu]
  );

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};
