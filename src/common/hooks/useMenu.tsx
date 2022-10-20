import { MenuContext } from '@/services/menu';
import { useContext } from 'react';

const useMenu = () => useContext(MenuContext);

export default useMenu;
