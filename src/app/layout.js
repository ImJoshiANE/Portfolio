import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import Head from 'next/head';
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
          {/* Microsoft Clarity Script */}
          <script
              type="text/javascript"
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
      </Head>
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
