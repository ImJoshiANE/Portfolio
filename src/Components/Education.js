import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  return (
    <li className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon />
      <div>
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className=" font-medium w-full md:text-sm">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  return (
    <div className=" my-64 ">
      <h2 className=" font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div className=" w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <div className=" absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"></div>

        <ul className=" w-full flex flex-col items-start justify-between ml-4 ">
          <Details
            type = "Masters of Computer Applications"
            time = "2022-2025"
            place = "National Institute of technology Trichy (NITT)"
            info = "Relevant courses included Data Structures and Data Structures, Algorithms, Computer Arcitecture, Computer Networks, DBMS, OS, Data Science, Machine Learning and Artificial Intelligence."
            />
          <Details
            type = "Bachelor Of Science In Physics"
            time = "2018-2021"
            place = "Kumaun University Nainital (KU)"
            info = "Relevant courses included Electrodynamics, Classical Mechanics, Relativistic Mechanics, Statistical Mechanics, Nuclear Physics, Thermodynamics, Fluid Mechanics and Quantum Mechanics."
            />
        </ul>
      </div>
    </div>
  );
};

export default Education;
