import AnimatedText from "@/Components/AnimatedText";
import Image from "next/image";
import profileImg from "../../../public/images/profileimages/Dheeraj-Image2.png";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";

const About = () => {
  return (
    <main className=" flex w-full flex-col items-center justify-center ">
      {/* This div is layout div */}
      <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32">
        <AnimatedText text="Passion Fuels Purpose!" className={"mb-16"} />

        <div className=" grid w-full grid-cols-8 gap-16 ">
          <div className=" col-span-3 flex flex-col items-start justify-start ">
            <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75 ">
              Biography
            </h2>
            <p className=" font-medium ">
              Hi, I'm <span className="font-bold">Dheeraj Kumar</span>, a web developer and Compititive Programmer. Instead of biography I'm writing dummy lorem ipsum text here.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className=" font-medium my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique faucibus placerat. Quisque scelerisque dignissim magna, sed aliquet enim.
            </p>

            <p className=" font-medium ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tristique faucibus placerat.
            </p>
          </div>
          <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
            <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "></div>
            <Image
              src={profileImg}
              alt="Dheeraj Kumar Image"
              className=" w-full h-auto rounded-2xl "
            />
          </div>
          <div className=" col-span-2 flex flex-col items-end justify-between ">
            <div className=" flex flex-col items-end justify-center ">
              <span className=" inline-block text-7xl font-bold ">
                1+
              </span>
              <h2 className=" text-xl capitalize font-medium text-dark/75 ">Satiefied clients</h2>
            </div>

            <div className=" flex flex-col items-end justify-center ">
              <span className=" inline-block text-7xl font-bold ">10+</span>
              <h2 className=" text-xl capitalize font-medium text-dark/75 ">projects completed</h2>
            </div>

            <div className=" flex flex-col items-end justify-center ">
              <span className=" inline-block text-7xl font-bold ">1+</span>
              <h2 className=" text-xl capitalize font-medium text-dark/75 ">years of experience</h2>
            </div>
          </div>
        </div>

        <Skills/>
        <Experience/>
        <Education/>
      </div>
    </main>
  );
};

export default About;
