import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/scroll-to-top.css';
import '../styles/animations.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
