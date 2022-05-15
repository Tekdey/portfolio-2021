import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import ButtonMailto from "../components/ButtonMailto";
import { svg } from "../assets/svg";
import Logo from "../components/Logo";

const V_ContainerOrange = {
  initial: {
    height: "100vh",
  },
  animate: {
    height: "50vh",
  },
  transition: {},
};
const V_ContainerBlack = {
  initial: {
    height: 0,
  },
  animate: {
    height: "50vh",
  },
  transition: {},
};

const Home = () => {
  return (
    <motion.div className="flex flex-col h-screen">
      <Logo />
      {/*
       *       Main div
       */}

      <div className="h-screen w-screen absolute flex">
        <ButtonMailto label={svg.mail} mailto="mailto:devw.nbardi@gmail.com" />
        <div className="w-screen text-black text-2xl justify-center items-center flex py-5 absolute top-0">
          <Link to="/" className="absolute z-10">
            Home
          </Link>
        </div>
        <div className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute left-0">
          <Link
            to="#"
            className="-rotate-90 mix-blend-difference"
            draggable="false"
          >
            About
          </Link>
        </div>
        <div className="h-screen text-orange-500 text-2xl justify-center items-center flex py-5 absolute right-0">
          <Link
            to="#"
            className=" rotate-90 mix-blend-difference"
            draggable="false"
          >
            Tutorial
          </Link>
        </div>
        <div className="w-screen text-orange-500 text-2xl justify-around items-center flex py-5 absolute bottom-0">
          <Link to="#" draggable="false">
            Work
          </Link>
          <Link to="#" draggable="false">
            My Skills
          </Link>
        </div>
      </div>

      {/*
       *       Background animated
       */}

      <motion.div
        className="bg-orange-500 w-screen"
        variants={V_ContainerOrange}
        initial="initial"
        animate="animate"
      ></motion.div>
      <motion.div
        className="bg-black"
        variants={V_ContainerBlack}
        initial="initial"
        animate="animate"
      ></motion.div>
    </motion.div>
  );
};

export default Home;
