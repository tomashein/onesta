import classNames from 'classnames';
import styles from './description.module.css';

const DescriptionItem: React.FC<React.PropsWithChildren<ItemProps>> = ({ children, className, label }) => {
  const classes = classNames(styles.item, className);

  return (
    <div className={classes}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{children}</span>
    </div>
  );
};

const Description = ({ children, className, title }: DescriptionProps) => {
  const classes = classNames(styles.container, className);

  return (
    <div className={classes}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

Description.Item = DescriptionItem;

export default Description;

type DescriptionProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
};

type ItemProps = {
  className?: string;
  label: string;
};
