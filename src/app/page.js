import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import profileImage from "../../public/images/profileimages/Dheeraj-Image1.png";
import lightBulb from "../../public/images/miscellaneous_icons_1.svg";
import TransitionEffect from "@/Components/TransitionEffect";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className=" flex items-center text-dark w-full min-h-screen dark:bg-dark dark:text-light">
        {/* This is for layout div all the props passed to layout div write here */}
        <div className=" pt-0 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pd-8">
          {/* Whatever childrens are passed to layout write here */}
          <div className=" flex items-center justify-between w-full lg:flex-col">
            <div className=" w-1/2 md:w-full ">
              <Image
                src={profileImage}
                alt="Dheeraj-Kumar"
                className=" w-full h-auto lg:hidden md:inline-block md:w-full"
              />
            </div>
            <div className=" w-1/2 flex flex-col items-center lg:w-full lg:text-center">
              <AnimatedText
                text="Mastering the Development: Full Stack, Full Passion."
                className=" !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xls md:!text-5xl sm:!text-3xl "
              />
              <p className=" my-4 text-base font-medium md:text-sm sm:text-xs ">
                I'm a developer who approaches every endeavor with unwavering
                dedication and passion. I am committed to leaving an indelible
                mark on every project I undertake.
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/DheerajKumarResume.pdf"
                  target="_blank"
                  className=" flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <a
                  href="https://www.linkedin.com/in/imjoshiane/"
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <HireMe />
        <div className=" absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulb} alt="lightBulb" className=" w-full h-auto " />
        </div>
      </main>
    </>
  );
}
