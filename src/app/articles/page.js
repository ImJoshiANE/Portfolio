"use client";
import { useRef } from "react";
import { easeInOut, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import AnimatedText from "@/Components/AnimatedText";
import DeltaFourImg from "../../../public/images/articleImages/DeltaFour.jpg";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 border bg-light border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className=" absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light"></div>
      <a
        href={link}
        target="_blank"
        className=" w-full inline-block cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt="Featrured Project Image"
          className="w-full h-auto"
        ></Image>
      </a>

      <a href="/" target="_blank">
        <h2 className="hover:underline capitalize text-2xl font-bold my-2 mt-4 xs:text-lg  ">
          {title}
        </h2>
      </a>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const MovingImage = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouseMove(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <a
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className=" capitalize text-xl font-semibold hover:underline ">
        {title}
      </h2>
      <FramerImage
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: 0.2 }}
      />
    </a>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full flex items-center justify-between my-4 p-4 py-6 border border-dark border-solid bg-light text-dark frist:mt-0 rounded-xl border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: easeInOut } }}
      viewport={{ once: true }}
    >
      <MovingImage img={img} title={title} link={link} />
      <span className=" text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const Articles = () => {
  return (
    <>
      <TransitionEffect />
      <main className=" mb-16 flex w-full flex-col items-center justify-center dark:bg-dark dark:text-light">
        {/* This div is layout div */}
        <div className="pt-16 w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light xl:p-24 lg:p-16 md:p-12 sm:p-8 md:pt-16 sm:pd-8">
          {/* Featured Articles */}
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl "
          />
          {/* <ul className=" grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
            />
            <FeaturedArticle
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
            />
          </ul> */}

          {/* Noramal Articles */}
          <h2 className=" font-bold text-4xl my-16 w-full text-center mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              img={DeltaFourImg}
              title="The Secret of Successful Startups -Kunal Shah’s Delta 4 Theory."
              date="10 Feb, 2024"
              link="https://imjoshiane.medium.com/the-secret-of-successful-startups-kunal-shahs-delta-4-theory-fb8e7aca0562"
            />
            {/* <Article
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              date="14 Jan, 2024"
              link="/"
            />
            <Article
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              date="14 Jan, 2024"
              link="/"
            />
            <Article
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              date="14 Jan, 2024"
              link="/"
            />
            <Article
              img={featuredImg1}
              title="Learn how to build a custom pagination component in ReactJS from scratch."
              date="14 Jan, 2024"
              link="/"
            /> */}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Articles;
