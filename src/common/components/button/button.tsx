import classNames from 'classnames';
import styles from './button.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'light';
};

const Button: React.FC<Props> = ({ children, className, variant, ...props }) => {
  const classes = classNames(styles.container, variant && styles[variant], className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
