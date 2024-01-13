import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full border-t-2 border-solid border-dark font-medium text-lg ">
      <div className="flex pt-0 w-full h-full z-0 bg-light p-32 !py-8 items-center !justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
          Made with
          <span className=" text-primary text-2xl px-1 ">&#9825; </span>by
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
