import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from "next/head";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Dheeraj Kumar",
  description: "Developer Portfolio website of Dheeraj Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      {/* Scripts must be outside of <Head> */}
      <Script
        id="smartlook-script"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '514bcb3261023513546abf663eecf8d30c1347c8', { region: 'eu' });
          `,
        }}
      />
      <Script
        id="clarity-script"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "pm0kpb2i4p");
          `,
        }}
      />
      <Script
        id="mouseflow-script"
        dangerouslySetInnerHTML={{
          __html: `
            window._mfq = window._mfq || [];
            (function() {
                var mf = document.createElement("script");
                mf.type = "text/javascript"; mf.defer = true;
                mf.src = "//cdn.mouseflow.com/projects/3a842bcd-cd89-40fb-a142-2b24ac419e54.js";
                document.getElementsByTagName("head")[0].appendChild(mf);
            })();
          `,
        }}
      />
      <body
        className={`${montserrat.variable} font-sans bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
