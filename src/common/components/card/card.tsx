import classNames from 'classnames';
import styles from './card.module.css';

type Props = {
  className?: string;
  title?: React.ReactNode;
  toolbar?: React.ReactNode;
};

const Card: React.FC<React.PropsWithChildren<Props>> = ({ children, className, title, toolbar }) => {
  const cardClass = classNames(styles.container, className);

  return (
    <article className={cardClass}>
      {(title || toolbar) && (
        <header className={styles.header}>
          {title && <div className={styles.title}>{title}</div>}
          {toolbar && <div className={styles.toolbar}>{toolbar}</div>}
        </header>
      )}
      <div className={styles.body}>{children}</div>
    </article>
  );
};

export default Card;
