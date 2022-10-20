import Meta from '@/config/meta';
import Head from 'next/head';
import Drawer from './drawer';
import Header from './header';
import Navbar from './navbar';
import Footer from './footer';
import styles from './layout.module.css';

type Props = {
  title: string;
};

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{`${title} - ${Meta.title}`}</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <Header title={title} />
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
        <Footer />
      </div>
      <Drawer />
    </div>
  );
};

export default Layout;
