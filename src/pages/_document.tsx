import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        </Head>
        <body className="text-sm">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
