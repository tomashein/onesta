import BoltIcon from '@/assets/icons/bolt.svg';
import Menu from '@/config/menu';
import useMenu from '@/hooks/useMenu';
import classNames from 'classnames';
import Link from 'next/link';
import Navlink from './navlink';
import styles from './navbar.module.css';

const Navbar = () => {
  const { showMenu, toggleMenu } = useMenu();

  const containerClass = classNames(styles.container, showMenu ? styles.container_visible : styles.container_hidden);
  const overlayClass = classNames(styles.overlay, !showMenu && styles.overlay_hidden);

  return (
    <>
      <nav className={containerClass}>
        <div className={styles.brand}>
          <Link href="/">
            <a>
              <BoltIcon />
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          {Menu.map((link) => (
            <Navlink key={link.title} href={link.href} title={link.title} icon={link.icon} exact={link.exact} />
          ))}
        </div>
      </nav>
      <div className={overlayClass} onClick={toggleMenu} />
    </>
  );
};

export default Navbar;
