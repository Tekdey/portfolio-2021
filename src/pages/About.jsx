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
import {vAbout} from "../utils/framerMotion.js";


const About = () => {

    const navigate = useNavigate()
    const [social, setSocial] = useState(false)

    const handleClick = () => {
        setSocial(true)
        setTimeout(() => setSocial(false), 1000)
    }


  return (
        <main className="bg-black h-screen">

        <header className="h-[25vh] w-screen absolute flex justify-center items-end">
            <motion.img onClick={() => navigate('/home')} src={Panda} alt="panda" draggable="false" 
                  variants={vAbout.logo} whileHover="hover" whileTap="tap" initial="initial" animate="visible" exit="exit"
                    className="h-[150px] md:h-[200px] xl:h-[200px] cursor-pointer z-10 absolute left-1/2 top-1/3"/>
            <motion.h1 variants={vAbout.title} initial="initial" animate="animate" exit="exit" className="bottom-0 text-white text-5xl">About</motion.h1>
        </header>

        {/*
        *       Background animated
        */}

        <motion.div variants={vAbout.containerOrange} initial="initial" animate="animate" exit="exit" className="bg-orange-500 w-screen"></motion.div>
        <motion.div variants={vAbout.containerBlack} initial="initial" animate="animate" exit="exit" className="bg-black"></motion.div>
        <motion.section variants={vAbout.containerWhite} initial="initial" animate="animate" exit="exit" className="z-40 md:p-20 flex bg-white"> 
        
        {/*
        *         Content
        */}

          <article className="flex">
                <motion.div variants={vAbout.article} initial="initial" animate="animate"
                            className="border-3 border-black sm:drop-shadow-lg p-5 flex flex-col items-start justify-center bg-white
                            leading-loose text-sm 
                            md:leading-loose md:text-lg 
                            lg:leading-loose lg:text-xl 
                            xl:leading-loose xl:text-xl 
                            2xl:leading-loose 2xl:text-xl">
                            <h3 className="p-3 font-semibold self-center text-center">Hey I'm <span className="font-bold">Nathan Bardi</span>, a developer located in France. </h3>

                            <p>Coding has been my hobbit since I was 13, I like to create beautiful websites with a good user experience and I also have to be in the shadows to create the back end of a website. </p>

                            <p>Currently I'm a student at O'Clock School, I'm also a blogger. </p>

                            <p> I like to write tutorial blogs to help people who want to learn to code. </p>
                            
                            <p className="p-5 self-center text-center">You can contact me by <LinkButton className="underline" href="mailto:devw.nbardi@gmail.com" externalLink={true}>email</LinkButton> or my <span onClick={handleClick} className="underline cursor-pointer">social network</span>.</p>
                              <div className="justify-center flex w-full">
                                  <ul className={social ? "flex gap-10 justify-center border-b-2 border-red-700" : "flex gap-10 w-full justify-center"}>
                                  <li>
                                      <LinkButton className="w-10" target={true} href="https://github.com/Tekdey" src={GithubLogo} alt="github" draggable="false" externalLink={true} />
                                  </li>
                                  <li>
                                      <LinkButton className="w-10" target={true} href="https://twitter.com/BardiNathan" src={TwitterLogo} alt="twitter" draggable="false" externalLink={true}/>
                                  </li>
                                  <li>
                                      <LinkButton className="w-10" target={true} href="https://www.linkedin.com/in/nathan-bardi/" src={LinkedinLogo} alt="linkedin" draggable="false" externalLink={true} />
                                  </li>
                                  <li>
                                      <LinkButton className="w-10" target={true} href="https://www.youtube.com/channel/UC80SONzT-LFpHFpYoJigBfQ" src={YoutubeLogo} alt="youtube" draggable="false" externalLink={true} />
                                  </li>
                                  
                                  </ul>
                              </div>
                </motion.div>
                
                <motion.img src={Astronaut} alt="pp" initial={{opacity: 0}} animate={{opacity:1, transition:{delay: 1}}} className="object-cover hidden xl:block xl:h-full xl:w-3/12" /> 
               
          </article>

      </motion.section>
      </main>
  )
};

export default About;