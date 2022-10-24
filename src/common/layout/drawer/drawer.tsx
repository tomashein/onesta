import XMarkIcon from '@/assets/icons/x-mark.svg';
import Card from '@/components/card';
import useDrawer from '@/hooks/useDrawer';
import classNames from 'classnames';
import styles from './drawer.module.css';

const Drawer = () => {
  const { drawer, closeDrawer } = useDrawer();

  const containerClass = classNames(
    styles.container,
    drawer.title !== '' ? styles.container_visible : styles.container_hidden
  );
  const overlayClass = classNames(styles.overlay, drawer.title === '' && styles.overlay_hidden);

  const Component = drawer.component;

  const props = { callback: drawer.callback };

  return (
    <>
      <aside className={containerClass}>
        <Card
          className={styles.card}
          title={drawer.title}
          toolbar={
            <button className={styles.close} onClick={closeDrawer}>
              <XMarkIcon />
            </button>
          }
        >
          <Component {...props} />
        </Card>
      </aside>
      <div className={overlayClass} onClick={closeDrawer} />
    </>
  );
};

export default Drawer;
