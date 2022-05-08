import '../styles/global.css'
import { AppProps } from 'next/app'
import Script from 'next/script';
import { createTheme, NextUIProvider } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { InstallPrompt } from '../lib/pwa'


const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {}, // optional
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {} // optional
  }
})

export default function App({ Component, pageProps }: AppProps) {
  InstallPrompt()
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <GoogleAnalytics />
        <BaiduTrace />
        {/* <GoogleAdsTrace /> */}
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

function GoogleAnalytics() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
      <Script id='ga-script-1' strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
    </>
  )
}

function GoogleAdsTrace() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Ads --> */}
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS}`}></Script>
      <Script id='google-ads-script-1' strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS}');
        `}
      </Script>
    </>
  )
}

function BaiduTrace() {
  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Ads --> */}
      <Script id='baidu-script-1' strategy="lazyOnload">
        {`
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${process.env.NEXT_PUBLIC_BAIDU_TRACE}";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
        `}
      </Script>
    </>
  )
}