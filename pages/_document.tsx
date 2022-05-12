import Document, { Html, Head, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="zh">
        <Head>
          <PWA />
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

function PWA() {
  return (
    <>
      <title>居家食用手册</title>
      <meta name='application-name' content='居家食用手册' />
      <meta name='apple-mobile-web-app-title' content='居家食用手册' />
      <meta name='description' content='居家食用手册' />
      <meta name='format-detection' content='telephone=no' />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='msapplication-config' content='/icons/browserconfig.xml' />
      <meta name='msapplication-TileColor' content='#2B5797' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='theme-color' content='#000000' />

      <link rel='icon' type='image/png' sizes='48x48' href='/icons/icon-48x48.png' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' href='/icons/icon.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/favicon.ico' />
      {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' /> */}

      <meta name='twitter:card' content='summary' />
      {/* <meta name='twitter:url' content='https://yourdomain.com' /> */}
      <meta name='twitter:title' content='居家食用手册' />
      <meta name='twitter:description' content='' />
      {/* <meta name='twitter:image' content='https://yourdomain.com/icons/android-chrome-192x192.png' /> */}
      <meta name='twitter:creator' content='@JiachenZhang5' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='居家食用手册' />
      <meta property='og:description' content='' />
      <meta property='og:site_name' content='居家食用手册' />
      <meta property='og:url' content='https://cook.zhangjc.tech' />
      <meta property='og:image' content='https://cook.zhangjc.tech/icons/icon-512x512.png' />

      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel='apple-touch-icon' href='/icons/icon-192x192.png' />
      <link rel='apple-touch-icon' sizes='192x192' href='/icons/icon-192x192.png' />
      <link rel='apple-touch-icon' sizes='512x512' href='/icons/icon-512x512.png' />
      {/* <link href="/icons/apple_splash_2048.png" sizes="2048x2732" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_1668.png" sizes="1668x2224" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_1536.png" sizes="1536x2048" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_1125.png" sizes="1125x2436" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_1242.png" sizes="1242x2208" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_750.png" sizes="750x1334" rel="apple-touch-startup-image" />
      <link href="/icons/apple_splash_640.png" sizes="640x1136" rel="apple-touch-startup-image" /> */}
    </>
  )
}