import React from "react";
import {useNavigate} from "react-router-dom"
import Panda from "../assets/images/panda.png"
import {WorkData} from "../work_data"
import LinkButton from "../components/LinkButton"

import { motion } from "framer-motion";
import { vWork } from "../utils/framerMotion";



const Work = () => {

    const navigate = useNavigate()

  return (
        <main className="bg-black h-screen">

            <header className="h-[35vh] w-screen absolute flex justify-center items-end">
                <motion.img onClick={() => navigate('/home')} src={Panda} alt="panda"
                draggable="false" variants={vWork.logo} whileHover="hover" whileTap="tap"initial="initial" animate="visible" exit="exit"
                className="h-[150px] md:h-[200px] xl:h-[250px] cursor-pointer z-10 absolute left-1/2 top-1/2"/>   

                <motion.h1 variants={vWork.title} initial="initial" animate="animate" exit="exit" className="bottom-0 text-white text-5xl" >Work</motion.h1>  
            </header>

        {/*
        *       Background animated
        */}

        <motion.div variants={vWork.containerOrange} initial="initial" animate="animate" exit="exit" className="bg-orange-500 w-screen"></motion.div> 
        <motion.div variants={vWork.containerBlack} initial="initial" animate="animate" exit="exit" className="bg-black"></motion.div>
           
        <motion.section variants={vWork.containerWhite} initial="initial" animate="animate" exit="exit"
         className="bg-white z-40 overflow-y-scroll overflow-x-hidden flex flex-wrap justify-center pt-20 sm:p-20 gap-5">
      
        {WorkData.map((card, index) => {
                return (
                  <LinkButton key={index} href={card.href} externalLink={true} target={true} >
                    <motion.article custom={index} variants={vWork.article} whileHover="hover" initial="hidden" animate="visible" exit="exit" className="h-[300px] w-[300px] drop-shadow-lg">
                        <motion.div variants={vWork.contentArticle} initial="hidden" animate="visible" whileHover="hover"
                          className=" border-8 border-black h-full overflow-hidden"
                          style={{
                            backgroundImage: `url(${card.image})`,
                            backgroundPosition: 'center',
                            backgroundSize: "cover",
                          }}>
                        
                            <motion.div variants={vWork.contentArticleInside} initial="initial" animate="animate" whileHover="hover"
                              className="h-full flex justify-around flex-col items-center relative text-2xl cursor-pointer">
                                <h3 className="font-semibold text-3xl text-stone-200">{card.title}</h3>
                                <p className="text-center bg-black bg-opacity-30 text-stone-200">{card.description}</p>
                                <span className=" text-stone-200">{card.date}</span>
                            </motion.div>
                        </motion.div>
                    </motion.article>
              </LinkButton>
                )
            })}

      </motion.section>
      </main>
  )
};

export default Work;
