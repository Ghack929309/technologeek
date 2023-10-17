import Script from "next/script";
export const Analytics = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2GVHRC3VWM"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-2GVHRC3VWM');
    `}
      </Script>
    </>
  );
};
