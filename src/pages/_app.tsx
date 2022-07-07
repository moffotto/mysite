import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { Fragment } from 'react';

import { StyleProvider } from '@/all';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Fragment>
      <Head>
        <meta content={'width=device-width, initial-scale=1, shrink-to-fit=no'} name={'viewport'} />
      </Head>
      <StyleProvider>
        <Component {...pageProps} />
      </StyleProvider>
    </Fragment>
  );
};

export default App;
