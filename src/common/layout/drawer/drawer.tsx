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

  return (
    <>
      <aside className={containerClass}>
        <Card
          className={styles.card}
          title={drawer.title}
          toolbar={
            <button onClick={closeDrawer}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          }
        >
          <Component />
        </Card>
      </aside>
      <div className={overlayClass} onClick={closeDrawer} />
    </>
  );
};

export default Drawer;
