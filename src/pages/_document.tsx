import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { Fragment } from 'react';
import { ServerStyleSheet } from 'styled-components';

import { currentSite } from '@/site';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href={'/favicon.ico'} rel={'icon'} />
          <link href={'http://localhost:3000/'} hrefLang={'x-default'} rel={'alternate'} />
        </Head>
        <body dir={currentSite.directionality}>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, react/display-name
        enhanceApp: (App: any) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <Fragment>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </Fragment>
      ),
    };
  } finally {
    sheet.seal();
  }
};
