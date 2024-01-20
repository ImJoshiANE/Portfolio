import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full border-t-2 border-solid border-dark font-medium text-lg dark:bg-dark dark:text-light dark:border-light sm:text-base  ">
      <div className="px-32 py-8 flex w-full h-full z-0 bg-light items-center justify-between dark:bg-dark lg:flex-col lg:py-6 lg:text-center md:px-8">

        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className=" lg:py-2 ">
          Made with
          <span className=" text-primary text-2xl px-1 dark:text-primaryDark ">&#9825; </span>by
          &nbsp;
          <a href="https://www.linkedin.com/in/imjoshiane/" target="_blank" className=" underline underline-offset-2 ">
            Dheeraj Kumar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
