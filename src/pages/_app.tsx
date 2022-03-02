import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module';

import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GTM_CODE!});
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default appWithTranslation(MyApp);
