import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
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
