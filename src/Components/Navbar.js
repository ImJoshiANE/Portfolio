"use client";
import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  LeetcodeIcon,
  SunIcon,
  MoonIcon,
  CodeForcesIcon,
} from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

// To apply common properties of nav link to all nav inks. (DRY)
const CustomLink = ({ href, title, className = "" }) => {
  // usePathname to get the current path and to highlight that link
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`inline-block h-[1px] bg-dark absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-light`}
      ></span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // usePathname to get the current path and to highlight that link
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`inline-block h-[1px] bg-light absolute left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" w-full px-32 py-8 font-medium flex items-center justify-between relative dark:text-light z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col items-center justify-center hidden lg:flex "
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={` bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } `}
        ></span>
      </button>

      <div className=" w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href={"/"} title={"Home"} className={" mr-4 "} />
          <CustomLink href={"/about"} title={"About"} className={" mx-4 "} />
          <CustomLink
            href={"/projects"}
            title={"Projects"}
            className={" mx-4 "}
          />
          <CustomLink
            href={"/articles"}
            title={"Articles"}
            className={" ml-4 "}
          />
        </nav>

        <nav className=" flex items-center justify-center flex-wrap">
          <motion.a
            href="https://github.com/ImJoshiANE"
            target="_blank"
            className=" w-6 mr-3 "
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/imjoshiane/"
            target="_blank"
            className=" w-6 mx-3 "
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com/ImJoshiAE"
            target="_blank"
            className=" w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://codeforces.com/profile/ANE"
            target="_blank"
            className=" w-6 mx-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <CodeForcesIcon className={`dark:text-white`} />
          </motion.a>

          <motion.a
            href="https://leetcode.com/ImJoshiANE/"
            target="_blank"
            className=" w-6 ml-3"
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <LeetcodeIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-5 flex items-center justify-center rounded-full p-1 ${
              mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
            }`}
          >
            {mode === "light" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1}}
        className=" min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 ">
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href={"/"}
              title={"Home"}
              className={""}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/about"}
              title={"About"}
              className={""}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/projects"}
              title={"Projects"}
              className={""}
              toggle={handleClick}
            />
            <CustomMobileLink
              href={"/articles"}
              title={"Articles"}
              className={""}
              toggle={handleClick}
            />
          </nav>

          <nav className=" flex items-center justify-center flex-wrap mt-3">
            <motion.a
              href="https://github.com/ImJoshiANE"
              target="_blank"
              className=" w-6 mr-3 bg-light rounded-full dark:bg-dark"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/imjoshiane/"
              target="_blank"
              className=" w-6 mx-3 "
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com/ImJoshiANE"
              target="_blank"
              className=" w-6 mx-3"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://leetcode.com/ImJoshiANE/"
              target="_blank"
              className=" w-6 ml-3"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <LeetcodeIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-5 flex items-center justify-center rounded-full p-1 ${
                mode === "dark" ? "bg-light text-dark" : "bg-dark text-light"
              }`}
            >
              {mode === "light" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className=" absolute left-[50%] top-2 translate-x-[-50%] ">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
