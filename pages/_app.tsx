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
        {/*<GoogleAnalytics />*/}
        <GTMScript gtmId={'GTM-KSC9667D'}/>
        {process.env.NEXT_PUBLIC_ENABLE_WEB_VITAL_SCRIPT && <WebVitalsScript />}
        <BaiduTrace />
        {/* <GoogleAdsTrace /> */}
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}

const GTMScript = ({gtmId}: { gtmId?: string }) => {
  if (!gtmId) {
    return null
  }
  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
        }}
      />
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');`
        }}
      />
    </>

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

function WebVitalsScript() {
  return (
    <>
      <Script id='web-vitals' type="module">
        {`
        import {getFCP, getLCP, getFID} from 'https://unpkg.com/web-vitals@0.2.4/dist/web-vitals.es5.min.js?module';
        // 获取 First Contentful Paint
        getFCP(({name, value}) => console.log(name, value));
        // 获取 Largest Contentful Paint
        getLCP(({name, value}) => console.log(name, value));
        // 获取 First Input Delay
        getFID(({name, value}) => console.log(name, value));
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