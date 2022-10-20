import MoonIcon from '@/assets/icons/moon.svg';
import SunIcon from '@/assets/icons/sun.svg';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeToggle;
