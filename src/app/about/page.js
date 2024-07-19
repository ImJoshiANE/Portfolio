import AnimatedText from "@/Components/AnimatedText";
import Image from "next/image";
import profileImg from "../../../public/images/profileimages/Dheeraj-Image2.png";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";

const About = () => {
  return (
    <>
      <TransitionEffect />
      <main className=" flex w-full flex-col items-center justify-center dark:bg-dark dark:text-light">
        {/* This div is layout div */}
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pd-8">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className=" grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className=" col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8 text-justify">
              <h2 className=" mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className=" font-medium mb-2">
                Hello!, I&lsquo;m{" "}
                <span className="font-bold">Dheeraj Kumar</span>, a passionate
                and dedicated Software Engineer with a strong background in
                computer science and competitive programming. Currently,
                I am pursuing my Master of Computer Applications at the National
                Institute of Technology, Trichy.
              </p>

              <p className="font-medium mb-2">
                Throughout my academic journey, I have achieved notable
                milestones, such as being rated as an Expert on Codeforces and a
                Knight on LeetCode. I have also secured top positions in various
                competitive programming contests and hackathons, showcasing my
                problem-solving skills and teamwork capabilities.
              </p>

              <p className=" font-medium ">
                My experience includes working as a Web Master and
                Problem Setter for ACM, NIT Trichy. I am constantly exploring new technologies and
                striving to contribute to innovative projects. Please feel free
                to explore my portfolio and reach out to me through the provided
                links.
              </p>
            </div>

            <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light "></div>
              <Image
                src={profileImg}
                alt="Dheeraj Kumar Image"
                className=" w-full h-auto rounded-2xl "
              />
            </div>

            <div className=" col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3">
              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  1+
                </span>
                <h2 className=" text-xl capitalize font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {" "}
                  Satiefied clients
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  10+{" "}
                </span>
                <h2 className=" text-xl capitalize font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className=" flex flex-col items-end justify-center xl:items-center">
                <span className=" inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  1+{" "}
                </span>
                <h2 className=" text-xl capitalize font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {" "}
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default About;
