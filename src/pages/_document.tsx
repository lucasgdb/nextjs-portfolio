import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <link rel="preload" href="/fonts/ibm-plex-sans-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link href="/static/favicons/favicon.png" rel="shortcut icon" />
        <link href="/static/favicons/site.webmanifest" rel="manifest" />
        <link href="/static/favicons/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/static/favicons/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/static/favicons/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />

        <meta content="#fff" name="theme-color" />
        <meta content="#fff" name="msapplication-TileColor" />
        <meta content="/static/favicons/browserconfig.xml" name="msapplication-config" />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw" name="google-site-verification" />
        <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
      </Head>

      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}