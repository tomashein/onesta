import classNames from 'classnames';
import styles from './alert.module.css';

const Alert: React.FC<React.PropsWithChildren<Alert>> = ({ children, className, type }) => {
  const classes = classNames(styles.container, styles[type], className);

  return <div className={classes}>{children}</div>;
};

export default Alert;

type Alert = {
  className?: string;
  type: 'error';
};
