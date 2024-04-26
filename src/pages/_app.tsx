// import "@/styles/globals.css";
import { makeStore, wrapper } from "@/services/redux/store";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-redux";
// import '../../public/'

function App({ Component, pageProps }: AppProps) {
  const APP_NAME = 'MINE SHOP'
  const APP_DESCRIPTION = 'MINE SHOP'
  console.log(makeStore)
  return (
    <>
      {/* <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff6334" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:image" content="/icons/logo_512.png" />
        <meta property="og:url" content="https://www.lottecnf.com" />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/fontawesome-pro.css" />
        <link rel="stylesheet" href="/assets/css/spacing.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head> */}
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="theme-color" content="#ff6334" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:image" content="/icons/logo_512.png" />
        <meta property="og:url" content="https://www.lottecnf.com" />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta name="application-name" content={APP_NAME} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="description" content={APP_DESCRIPTION} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <script src="/assets/js/bootstrap.bundle.min.js" />
      </Head>
      <Component {...pageProps} />
      {/* js here */}
      {/* <Script rel="stylesheet" src="../../public/assets/js/jquery-3.6.0.min.js"></Script> */}
      {/* <Script rel="stylesheet" src="/assets/js/waypoints.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/bootstrap.bundle.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/meanmenu.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/swiper.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/slick.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/magnific-popup.min.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/counterup.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/wow.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/ajax-form.js"></Script>
      <Script rel="stylesheet" src="../../public/assets/js/beforeafter.jquery-1.0.0.min.js"></Script> */}
      {/* <Script src="/assets/js/main.js" /> */}
    </>
  );
}
export default wrapper.withRedux(App)
