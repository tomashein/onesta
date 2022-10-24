import classNames from 'classnames';
import styles from './form.module.css';

const FormItem: React.FC<React.PropsWithChildren<ItemProps>> = ({ children, className, error }) => {
  const classes = classNames(styles.item, className);

  return (
    <div className={classes}>
      {children}
      {error && error !== '' && <div className={styles.error}>{error}</div>}
    </div>
  );
};

const FormActions: React.FC<React.PropsWithChildren<ActionsProps>> = ({ children, className }) => {
  const classes = classNames(styles.actions, className);

  return <div className={classes}>{children}</div>;
};

const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>;
};

Form.Item = FormItem;
Form.Actions = FormActions;

export default Form;

type ItemProps = {
  className?: string;
  error?: string;
};

type ActionsProps = {
  className?: string;
};

type FormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
};
