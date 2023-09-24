import Script from "next/script";
export const Analytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-K4ZD0K08LV"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-K4ZD0K08LV');
    `}
      </Script>
    </>
  );
};
