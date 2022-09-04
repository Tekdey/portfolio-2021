import React from "react";
import { motion } from "framer-motion";
import { svg } from "../assets/svg";
import Logo from "../components/Logo";
import Sound from "../components/Sound";
import LinkButton from "../components/LinkButton";
import {vHome} from "../utils/framerMotion.js";

const Home = () => {

  return (
    <nav className="flex flex-col h-screen">
      <Logo />
      {/*
       *       Main div
       */}

      <ul className="h-screen w-screen absolute flex">
        <motion.li variants={vHome.navTop} initial="initial" animate="animate" exit="exit" transition={vHome.navTransition} className="w-screen text-black text-2xl justify-center items-center flex py-5 absolute top-0 p-10">
          <LinkButton src={svg.mail} mailto="mailto:devw.nbardi@gmail.com" externalLink={false} className="absolute z-10 right-0 text-2xl px-5 py-2"/>
          <LinkButton href="/" className="relative z-10" alt="home" src={svg.home} externalLink={false}/>
        </motion.li>

        <motion.li variants={vHome.navLeft} initial="initial" animate="animate" exit="exit" transition={vHome.navTransition} className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute left-0" >
          <LinkButton href="/about" className="-rotate-90 mix-blend-difference" draggable="false" externalLink={false}>About</LinkButton>
        </motion.li>

        <motion.li variants={vHome.navRight} initial="initial" animate="animate" exit="exit" transition={vHome.navTransition} className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute right-0">
          <LinkButton href="/tutorial" className=" rotate-90 mix-blend-difference" draggable="false" externalLink={false}>Tutorial</LinkButton>
        </motion.li>

        <motion.li variants={vHome.navBottom} initial="initial" animate="animate" exit="exit" transition={vHome.navTransition} className="w-screen text-orange-500 text-2xl justify-around items-center flex py-5 absolute bottom-0">
          <LinkButton href="/work" draggable="false" externalLink={false}>Work</LinkButton>
          <LinkButton href="/skills" draggable="false" externalLink={false}>Skills</LinkButton>
        </motion.li>

      </ul>

      {/*
       *       Background animated
       */}

      <motion.div variants={vHome.containerOrange} initial="initial" animate="animate" exit="exit" className="bg-orange-500 w-screen"></motion.div>
      <motion.div variants={vHome.containerBlack} initial="initial" animate="animate" exit="exit" className="bg-black"></motion.div>
    </nav>
  );
};

export default Home;
