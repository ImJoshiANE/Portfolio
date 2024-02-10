import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Image from "next/image";
import OpinifyImg from "../../../public/images/projectimages/Opinify.jpg";
import InfotrekImg from "../../../public/images/projectimages/Infotrek.png";
import EazyCartImg from "../../../public/images/projectimages/eazyCart.png";
import VisualSortImg from "../../../public/images/projectimages/VisualSort.png";
import ScholarStatImg from "../../../public/images/projectimages/ScholarStat.jpg";
import TransitionEffect from "@/Components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" p-12 flex items-center justify-between w-full border border-solid border-dark rounded-3xl shadow-2xl relative bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className=" absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 xs:w-full sm:h-[102%] xs:rounded-[1.5rem]"></div>
      <a
        href={github}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full  "
      >
        <Image
          src={img}
          alt="Featrured Project Image"
          className="w-full h-auto"
        ></Image>
      </a>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark xs:text-base  ">
          {type}
        </span>
        <a
          href={github}
          target="_blank"
          className=" hover:underline underline-offset-2 "
        >
          <h2 className=" my-2 w-full text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </a>
        <p className=" my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="mt-2 flex items-center ">
          <a href={github} target="_blank" className="w-10">
            <GithubIcon />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 text-lg rounded-lg text-light bg-dark px-6 py-2 font-semibold dark:text-dark dark:bg-light sm:px-4 sm:text-base"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className=" p-6 flex flex-col items-center w-full border border-solid border-dark rounded-3xl shadow-2xl bg-light relative rounded-br-2xl dark:bg-dark dark:border-light xs:p-4">
      <div className=" absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "></div>
      <a
        href={github}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt="Featrured Project Image"
          className="w-full h-auto"
        ></Image>
      </a>

      <div className="mt-4 w-full flex flex-col items-start justify-between ">
        <span className=" text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <a
          href={github}
          target="_blank"
          className=" hover:underline underline-offset-2 "
        >
          <h2 className=" my-2 w-full text-3xl font-bold text-left lg:text-2xl ">
            {title}
          </h2>
        </a>
        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </a>
          <a href={github} target="_blank" className="w-8 md:w-6 ">
            <GithubIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <TransitionEffect />
      <main className=" mb-16 flex w-full flex-col items-center justify-center dark:bg-dark dark:text-light ">
        {/* This div is layout div */}
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pd-8">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="!mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className=" col-span-12 ">
              <FeaturedProject
                type="Featured Project"
                title="Opinify: Speak. Share. Connect."
                summary="Opinify is your platform to voice your thoughts, share your ideas, and connect with a diverse community. Speak freely, share your unique perspective, and foster meaningful connections through vibrant discussions. Dynamic space where opinions thrive."
                img={OpinifyImg}
                link="https://github.com/ImJoshiANE/Opinify"
                github="https://github.com/ImJoshiANE/Opinify"
              />
            </div>
            <div className=" col-span-6 md:col-span-12 ">
              <Project
                type="Full Stack"
                title="Infotrek: Event Management WebApp."
                img={InfotrekImg}
                link="https://infotrek23.netlify.app/"
                github="https://github.com/ImJoshiANE/INFOTREK23-FRONTEND"
              />
            </div>
            <div className=" col-span-6 md:col-span-12 ">
              <Project
                type="Full Stack"
                title="eazyCart: eCommerce platform."
                img={EazyCartImg}
                link="https://eazycart.netlify.app/"
                github="https://github.com/ImJoshiANE/eazyCart"
              />
            </div>
            <div className=" col-span-6 md:col-span-12 ">
              <Project
                type="Web Scraping"
                title="ScholarStat : Scraping and analysis tool."
                img={ScholarStatImg}
                link="https://github.com/ImJoshiANE/ScholarStat"
                github="https://github.com/ImJoshiANE/ScholarStat"
              />
            </div>
            <div className=" col-span-6 md:col-span-12 ">
              <Project
                type="Frontend/Algorithms"
                title="VisualSort : Algorithm Visualizer"
                img={VisualSortImg}
                link="https://imjoshiane.github.io/VisualSort/"
                github="https://github.com/ImJoshiANE/VisualSort"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
