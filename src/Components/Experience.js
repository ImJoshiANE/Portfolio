import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between ">
      <LiIcon />
      <div>
        <h3 className=" capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-primary capitalize "
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className=" font-medium w-full ">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className=" my-64 ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className=" w-[75%] mx-auto relative ">
        <div className=" absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"></div>

        <ul className=" w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            position="Web Master"
            company="ACM Student Chapter NITT"
            companyLink="https://www.acm.org/"
            time="2022-Present"
            address="NIT Trichy"
            work="Work specifically involved the development and testing of websites for ACM NITT events and contests. Gained work experience on MERN stack and SQL databases"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
