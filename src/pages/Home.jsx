import React from "react";
import { motion } from "framer-motion";
import { svg } from "../assets/svg";
import Logo from "../components/Logo";
import Sound from "../components/Sound";
import LinkButton from "../components/LinkButton";

const V_ContainerOrange = {
  initial: {
    height: "100vh",
  },
  animate: {
    height: "50vh",
  },
  exit: {
    height: "0"
  }
};
const V_ContainerBlack = {
  initial: {
    height: 0,
  },
  animate: {
    height: "50vh",
  },
  exit: {
    height: "100vh",
  },
};
const V_NavTop = {
  initial: {
    top: "-100vh",
    opacity: 0,
  },
  animate: {
    top: 0,
    opacity: 1,
  },
  exit: {
    top: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const V_NavLeft = {
  initial: {
    left: "-100vw",
    opacity: 0,
  },
  animate: {
    left: 0,
    opacity: 1,
  },
  exit: {
    left: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const V_NavRight = {
  initial: {
    right: "-100vw",
    opacity: 0,
  },
  animate: {
    right: 0,
    opacity: 1,
  },
  exit: {
    right: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
const V_NavBottom = {
  initial: {
    bottom: "-100vh",
    opacity: 0,
  },
  animate: {
    bottom: 0,
    opacity: 1,
  },
  exit: {
    bottom: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const NavTransition = {
    delay: 0.2,
    type: "spring",
    stiffness: 50,
    bounce: 1
}

const Home = () => {

  return (
    <div className="flex flex-col h-screen">
      <Logo />
      {/*
       *       Main div
       */}

      <div className="h-screen w-screen absolute flex">
        <motion.div
          className="w-screen text-black text-2xl justify-center items-center flex py-5 absolute top-0 p-10"
          variants={V_NavTop}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={NavTransition}
        >
          <Sound />
          <LinkButton
            className="absolute z-10 right-0 text-2xl px-5 py-2"
            src={svg.mail}
            mailto="mailto:devw.nbardi@gmail.com"
            externalLink={false}
          />
          
          <LinkButton href="/" className="relative z-10" alt="home" src={svg.home} externalLink={false}/>

        </motion.div>
        <motion.div 
          className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute left-0"
          variants={V_NavLeft}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={NavTransition}
        >
          <LinkButton
            href="/about"
            className="-rotate-90 mix-blend-difference"
            draggable="false"
            externalLink={false}
          >
            About
          </LinkButton>
        </motion.div>
        <motion.div 
        className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute right-0"
        variants={V_NavRight}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={NavTransition}
        >
          <LinkButton
            href="/tutorial"
            className=" rotate-90 mix-blend-difference"
            draggable="false"
            externalLink={false}
          >
            Tutorial
          </LinkButton>
        </motion.div>
        <motion.div 
        className="w-screen text-orange-500 text-2xl justify-around items-center flex py-5 absolute bottom-0"
        variants={V_NavBottom}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={NavTransition}
        >
          <LinkButton href="/work" draggable="false" externalLink={false}>
            Work
          </LinkButton>
          <LinkButton href="/skills" draggable="false" externalLink={false}>
            Skills
          </LinkButton>
        </motion.div>
      </div>

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
        className="bg-black"
        variants={V_ContainerBlack}
        initial="initial"
        animate="animate"
        exit="exit"
      ></motion.div>
    </div>
  );
};

export default Home;
