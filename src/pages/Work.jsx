import React, { useRef } from "react";
import {useNavigate} from "react-router-dom"
import Panda from "../assets/images/panda.png"
import {WorkData} from "../work_data"
import LinkButton from "../components/LinkButton"

import { motion } from "framer-motion";


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
      height: "0",
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
      height: "35vh",
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
      height: "65vh",
    },
    exit: {
      height: "0",
    }
  };
  const V_Title = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
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
  const V_Article = {
    hidden: {
      scale: 0,
      opacity:0
    },
    visible: index => ({
        scale: 1,
        opacity:1.3,
        transition: {
            ease: [0.6,0.01, -0.05, 0.95],
            duration: 1,
            delay: index * 0.1,
            type: "spring",
        }
    }),
    exit:{
        scale: 0,
        opacity:0
    }
  };
  const V_ContentArticle = {
    hover:{
        scale: 1.1,
        zIndex: 100,
        transition: {
            type: "spring",
            stiffness: 500,
        }
    },
  }


const Work = () => {

    const navigate = useNavigate()
    const ref = useRef()

    const handleClick = (href) => {
        navigate(href)
    }


  return (
        <div className="bg-black h-screen">

        <header className="h-[35vh] w-screen absolute flex justify-center items-end">
            <motion.img
                    src={Panda}
                    alt="panda"
                    className={
                    "h-[150px] md:h-[200px] xl:h-[250px] cursor-pointer z-10 absolute left-1/2 top-1/2"
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
                exit="exit">Work</motion.h1>
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
        <motion.div
        className="bg-white z-40 overflow-y-scroll overflow-x-hidden flex flex-wrap justify-center pt-20 sm:p-20 gap-5" 
        variants={V_ContainerWhite}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {WorkData.map((card, index) => {
                return (
                  <LinkButton href={card.href} externalLink={true} target={true} >
                    <motion.article 
                    ref={ref} 
                    key={index} 
                    className="h-[300px] w-[300px] drop-shadow-lg" 
                    variants={V_Article}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={index}
                    >
                        <motion.div 
                        className=" border-8 border-black h-full overflow-hidden"
                        variants={V_ContentArticle}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          backgroundPosition: 'center',
                          backgroundSize: "cover",
                        }}
                        >
                            <motion.div 
                            className="h-full flex justify-around flex-col items-center relative text-2xl cursor-pointer"
                            initial={{opacity: 0}}
                            animate={{
                              opacity: 1, 
                              background: "rgba(0, 0, 0, 0.226)",
                            }}
                            whileHover={{
                              opacity: 0, 
                              background: "none",
                            }}
                            >
                                <h3 className="font-semibold text-3xl text-stone-200">{card.title}</h3>
                                <p className="text-center bg-black bg-opacity-30 text-stone-200">{card.description}</p>
                                <span className=" text-stone-200">{card.date}</span>
                            </motion.div>
                        </motion.div>
                    </motion.article>
              </LinkButton>
                )
            })}

      </motion.div>
      </div>
  )
};

export default Work;
