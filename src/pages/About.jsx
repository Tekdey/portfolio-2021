import React, {  useState } from "react";
import {useNavigate} from "react-router-dom"
import Panda from "../assets/images/panda.png"
import Astronaut from "../assets/images/astronaute.jpg"

import { motion } from "framer-motion";

import GithubLogo from "../assets/gif/github.gif"
import LinkedinLogo from "../assets/gif/linkedin.gif"
import TwitterLogo from "../assets/gif/twitter.gif"
import YoutubeLogo from "../assets/gif/youtube.gif"
import LinkButton from "../components/LinkButton";


const V_Logo = {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      scale: 1,
      x: "-50%",
      y: "-50%",
    },
    hover: {
      scale: 0.9
    },
    tap: {
      scale: 1.2,
    },
    exit: {
      scale: 0,
      transition: { ease: "easeInOut" },
    },
};

const V_ContainerOrange = {
    initial: {
      height: "0",
    },
    animate: {
      height: "25vh",
    },
    exit: {
      height: "100vh",
      transition: {
          delay: 0.3, 
      }
    }
  };
  const V_ContainerBlack = {
    initial: {
      height: "100vh",
    },
    animate: {
      height: "0",
    },
    exit: {
      height: "100vh",
    }
  };
  const V_ContainerWhite = {
    initial: {
      height: "0vh",
    },
    animate: {
      height: "75vh",
    },
    exit: {
      height: "0",
    }
  };
  const V_Title = {
    initial: {
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
          ease: [0.6,0.01, -0.05, 0.95],
          duration: 1
      }
    },
    exit:{
        y: 50,
        opacity: 0,
        mixBlendMode: "multiply",
    }
    
  };

const Work = () => {

    const navigate = useNavigate()
    const [social, setSocial] = useState(false)

    const handleClick = () => {
        setSocial(true)
        setTimeout(() => setSocial(false), 1000)
    }


  return (
        <div className="bg-black h-screen">

        <header className="h-[25vh] w-screen absolute flex justify-center items-end">
            <motion.img
                    src={Panda}
                    alt="panda"
                    className={
                    "h-[150px] md:h-[200px] xl:h-[200px] cursor-pointer z-10 absolute left-1/2 top-1/3"
                    }
                    draggable="false"
                    variants={V_Logo}
                    whileHover="hover"
                    whileTap="tap"
                    initial="initial"
                    animate="visible"
                    exit="exit"
                    onClick={() => navigate('/home')}
                />
            
            <motion.h1 
                className="bottom-0 text-white text-5xl" 
                variants={V_Title} 
                initial="initial" 
                animate="animate"
                exit="exit">About</motion.h1>
        </header>

        {/*
        *       Background animated
        */}
        <motion.div
            className="bg-orange-500 w-screen"
            variants={V_ContainerOrange}
            initial="initial"
            animate="animate"
            exit="exit"
        ></motion.div>
        <motion.div
            className="bg-black "
            variants={V_ContainerBlack}
            initial="initial"
            animate="animate"
            exit="exit"
        ></motion.div>
        <motion.section
            className="bg-white z-40 pt-20 md:p-20 flex gap-5 justify-center" 
            variants={V_ContainerWhite}
            initial="initial"
            animate="animate"
            exit="exit"
        >
          <article className=" flex
                ">

                <motion.div 
                initial={{opacity: 0}} 
                animate={{opacity:1, transition:{delay: 1}}} 
                className="border-3 border-black drop-shadow-lg bg-white p-5 flex flex-col items-start
                leading-loose text-sm 
                md:leading-loose md:text-lg 
                lg:leading-loose lg:text-xl 
                xl:leading-loose xl:text-xl 
                2xl:leading-loose 2xl:text-xl"
               
                >
                <h3 className="p-3 font-semibold self-center text-center">Hey I'm <span className=" font-bold">Nathan Bardi</span>, a developer located in France. </h3>

                <p>Coding has been my hobbit since I was 13, I like to create beautiful websites with a good user experience and I also have to be in the shadows to create the back end of a website. </p>

                <p>Currently I'm a student at O'Clock School, I'm also a blogger. </p>

                <p> I like to write tutorial blogs to help people who want to learn to code. </p>
                
                <p className="p-5 self-center text-center">You can contact me by <LinkButton className="underline" href="mailto:devw.nbardi@gmail.com" externalLink={true}>email</LinkButton> or my <span className="underline cursor-pointer" onClick={handleClick}>social network</span>.</p>
                  <div className="justify-center flex w-full">
                      <div className={social ? "flex gap-10 justify-center border-b-2 border-red-700" : "flex gap-10 w-full justify-center"}>
                      <LinkButton className="w-10" target={true} href="https://github.com/Tekdey" src={GithubLogo} alt="github" draggable="false" externalLink={true} />
                      <LinkButton className="w-10" target={true} href="https://twitter.com/BardiNathan" src={TwitterLogo} alt="twitter" draggable="false" externalLink={true}/>
                      <LinkButton className="w-10" target={true} href="#" src={LinkedinLogo} alt="linkedin" draggable="false" externalLink={true} />
                      <LinkButton className="w-10" target={true} href="https://www.youtube.com/channel/UC80SONzT-LFpHFpYoJigBfQ" src={YoutubeLogo} alt="youtube" draggable="false" externalLink={true} />
                      </div>
                  </div>
                </motion.div>
                <motion.img  
                    initial={{opacity: 0}} 
                    animate={{opacity:1, transition:{delay: 1}}} 
                    src={Astronaut} alt="pp" 
                    className="object-cover 
                    hidden
                    xl:block xl:h-full xl:w-3/12
                    " 
                
                />
          </article>

      </motion.section>
      </div>
  )
};

export default Work;