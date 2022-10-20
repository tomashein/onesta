import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <span>2022©</span>
        <a href="mailto:theinfx@gmail.com">Tomas Hein</a>
      </div>
      <div className={styles.menu}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
