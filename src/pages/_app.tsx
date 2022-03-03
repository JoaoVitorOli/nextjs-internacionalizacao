import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);
