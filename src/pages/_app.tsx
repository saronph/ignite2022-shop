import { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import Image from 'next/image';

import logoImg from '../assets/logo.svg';
import { AppContainer, AppHeader } from '../styles/pages/app';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <AppHeader>
        <Image src={logoImg} alt='' />
      </AppHeader>

      <Component {...pageProps} />
    </AppContainer>
  );
}
