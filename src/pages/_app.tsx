import '@/styles/globals.css';
import Meta from '@/config/meta';
import { DrawerProvider } from '@/services/drawer';
import { MenuProvider } from '@/services/menu';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme={Meta.theme}>
      <MenuProvider>
        <DrawerProvider>
          <Component {...pageProps} />
        </DrawerProvider>
      </MenuProvider>
    </ThemeProvider>
  );
};

export default MyApp;
