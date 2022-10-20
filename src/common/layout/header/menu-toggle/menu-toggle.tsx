import Bars3Icon from '@/assets/icons/bars-3.svg';
import useMenu from '@/hooks/useMenu';
import styles from './menu-toggle.module.css';

const MenuToggle = () => {
  const { toggleMenu } = useMenu();

  return (
    <button className={styles.button} onClick={toggleMenu}>
      <Bars3Icon />
    </button>
  );
};

export default MenuToggle;
