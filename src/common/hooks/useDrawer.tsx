import { DrawerContext } from '@/services/drawer';
import { useContext } from 'react';

const useDrawer = () => useContext(DrawerContext);

export default useDrawer;
