import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/Components/AnimatedText";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import profileImage from "../../public/images/profileimages/Dheeraj-Image1.png";
import lightBulb from "../../public/images/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    // This is for main
    <main className=" flex items-center text-dark w-full min-h-screen ">
      {/* This is for layout div all the props passed to layout div write here */}
      <div className=" pt-0 w-full h-full inline-block z-0 bg-light p-32 ">
        {/* Whatever childrens are passed to layout write here */}
        <div className=" flex items-center justify-between w-full ">
          <div className=" w-1/2 ">
            <Image
              src={profileImage}
              alt="Dheeraj-Kumar"
              className=" w-full h-auto "
            />
          </div>
          <div className=" w-1/2 flex flex-col items-center ">
            <AnimatedText
              text="Mastering the Development: Full Stack, Full Passion."
              className=" !text-6xl !text-left"
            />
            <p className=" my-4 text-base font-medium ">
              I'm a developer who approaches every endeavor with unwavering
              dedication and passion. I am committed to leaving an indelible mark on every project I undertake.
            </p>
            <div className=" flex items-center self-start mt-2 ">
              <Link href="/DheerajKumarResume.pdf" target="_blank"
              className=" flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark "
              >
                Resume <LinkArrow className={"w-6 ml-1"}/>
              </Link>
              <a href="https://www.linkedin.com/in/imjoshiane/" target="_blank"
              className="ml-4 text-lg font-medium capitalize text-dark underline "
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <HireMe/>
      <div className=" absolute right-8 bottom-8 inline-block w-24 ">
        <Image src={lightBulb} alt="lightBulb" className=" w-full h-auto "/>
      </div>
    </main>
  );
}
