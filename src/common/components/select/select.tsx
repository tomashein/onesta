import classNames from 'classnames';
import styles from './select.module.css';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
  className?: string;
};

const Select: React.FC<Props> = ({ children, className, ...props }) => {
  const classes = classNames(styles.container, className);

  return (
    <select className={classes} {...props}>
      {children}
    </select>
  );
};

export default Select;
