'use client'
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {
    return(
        <motion.div className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer absolute py-3 px-6 "
        whileHover={{scale:1.05}}
        initial = {{x:0, y:0}}
        whileInView = {{x:x, y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
    <h2 className=" w-full text-center mt-64 font-bold text-8xl ">Skills</h2>
    <div className=" w-full h-screen relative flex items-center justify-center bg-circularLight rounded-full ">
        <motion.div className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer "
        whileHover={{scale:1.05}}
        >
            Web
        </motion.div>
        <Skill name="ReactJS" x="-17vw" y="2vw"/>
        <Skill name="Javascript" x="-5vw" y="10vw"/>
        <Skill name="MongoDB" x="18vw" y="3vw"/>
        <Skill name="PostgreSQL" x="0vw" y="22vw"/>
        <Skill name="FireBase" x="-20vw" y="-15vw"/>
        <Skill name="SupaBase" x="15vw" y="-12vw"/>
        <Skill name="NodeJS" x="32vw" y="5vw"/>
        <Skill name="NextJS" x="0vw" y="-20vw"/>
        <Skill name="CSS" x="-25vw" y="18vw"/>
        <Skill name="TailwindCSS" x="18vw" y="18vw"/>
        <Skill name="HTML" x="-35vw" y="-7vw"/>
        <Skill name="C/C++" x="30vw" y="-5vw"/>
        <Skill name="Python" x="-5vw" y="-10vw"/>
        <Skill name="Git/Github" x="-30vw" y="10vw"/>
    </div>
    </>
  )
}

export default Skills