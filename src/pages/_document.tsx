import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const APP_NAME = 'MINE SHOPs'
  const APP_DESCRIPTION = 'MINE SHOP'
  return (
    <Html lang="en">
      <Head >
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
        {/* <script defer src="/assets/js/meanmenu.min.js"></script>
        <script defer src="/assets/js/swiper.min.js"></script>
        <script defer src="/assets/js/slick.min.js"></script>
        <script defer src="/assets/js/magnific-popup.min.js"></script>
        <script defer src="/assets/js/counterup.js"></script>
        <script defer src="/assets/js/wow.js"></script>
        <script defer src="/assets/js/ajax-form.js"></script>
        <script defer src="/assets/js/beforeafter.jquery-1.0.0.min.js"></script> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
