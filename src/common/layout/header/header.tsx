import BoltIcon from '@/assets/icons/bolt.svg';
import MenuToggle from './menu-toggle';
import ThemeToggle from './theme-toggle';
import styles from './header.module.css';

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <header className={styles.container}>
      <div>
        <BoltIcon className={styles.brand} />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div>
        <ThemeToggle />
        <MenuToggle />
      </div>
    </header>
  );
};

export default Header;
