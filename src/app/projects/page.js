import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Image from "next/image";
import OpinifyImg from "../../../public/images/projectimages/Opinify.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" p-12 flex items-center justify-between w-full border border-solid border-dark rounded-3xl shadow-2xl relative bg-light rounded-br-2xl">
      <div className=" absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl"></div>
      <a
        href={github}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt="Featrured Project Image"
          className="w-full h-auto"
        ></Image>
      </a>

      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 ">
        <span className=" text-primary font-medium text-xl ">{type}</span>
        <a
          href={github}
          target="_blank"
          className=" hover:underline underline-offset-2 "
        >
          <h2 className=" my-2 w-full text-4xl font-bold text-left ">
            {title}
          </h2>
        </a>
        <p className=" my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center ">
          <a href={github} target="_blank" className="w-10">
            <GithubIcon />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 text-lg rounded-lg text-light bg-dark px-6 py-2 font-semibold"
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
    <article className=" p-6 flex flex-col items-center w-full border border-solid border-dark rounded-3xl shadow-2xl bg-light relative  rounded-br-2xl">
      <div className=" absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"></div>
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
        <span className=" text-primary font-medium text-xl ">{type}</span>
        <a
          href={github}
          target="_blank"
          className=" hover:underline underline-offset-2 "
        >
          <h2 className=" my-2 w-full text-3xl font-bold text-left ">
            {title}
          </h2>
        </a>
        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </a>
          <a href={github} target="_blank" className="w-8">
            <GithubIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className=" mb-16 flex w-full flex-col items-center justify-center ">
      {/* This div is layout div */}
      <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32">
        <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />

        <div className=" grid grid-cols-12 gap-24 gap-y-32 ">
          <div className=" col-span-12 ">
            <FeaturedProject
              type="Featured Project"
              title="Opinify: Speak. Share. Connect."
              summary="Opinify is your platform to voice your thoughts, share your ideas, and connect with a diverse community. Speak freely, share your unique perspective, and foster meaningful connections through vibrant discussions. Dynamic space where opinions thrive."
              img={OpinifyImg}
              link="https://github.com/ImJoshiANE"
              github="https://github.com/ImJoshiANE"
            />
          </div>
          <div className=" col-span-6 ">
            <Project
              type="Featured Project"
              title="Opinify: Speak. Share. Connect."
              img={OpinifyImg}
              link="https://github.com/ImJoshiANE"
              github="https://github.com/ImJoshiANE"
            />
          </div>
          <div className=" col-span-6 ">
            <Project
              type="Featured Project"
              title="Opinify: Speak. Share. Connect."
              img={OpinifyImg}
              link="https://github.com/ImJoshiANE"
              github="https://github.com/ImJoshiANE"
            />
          </div>
          <div className=" col-span-6 ">
            <Project
              type="Featured Project"
              title="Opinify: Speak. Share. Connect."
              img={OpinifyImg}
              link="https://github.com/ImJoshiANE"
              github="https://github.com/ImJoshiANE"
            />
          </div>
          <div className=" col-span-6 ">
            <Project
              type="Featured Project"
              title="Opinify: Speak. Share. Connect."
              img={OpinifyImg}
              link="https://github.com/ImJoshiANE"
              github="https://github.com/ImJoshiANE"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
