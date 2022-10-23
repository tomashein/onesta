import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './navlink.module.css';

type Props = {
  href: string;
  title: string;
  icon: React.ReactNode;
  exact?: boolean;
};

const Navlink: React.FC<Props> = ({ href, title, icon, exact }) => {
  const { pathname } = useRouter();

  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const activeStyle = classNames(isActive && styles.link_active);

  return (
    <Link href={href}>
      <a className={`${styles.link} ${activeStyle}`}>
        <span>{icon}</span>
        <span>{title}</span>
      </a>
    </Link>
  );
};

export default Navlink;
