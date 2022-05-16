import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const V_ContainerOrange = {
    initial: {
      height: "0",
      width: "100vw"
    },
    animate: {
      height: "0",
      width: "100vw",
      display: "none" // Display none
    },
    exit: {
      height: "100vh",
      width: "100vw",
      position: "absolute",
      transition: {
          delay: 0.5, 
      }
    }
  };
  const V_ContainerBlack = {
    initial: {
      height: "100vh",
      width: "100vw",
    },
    animate: {
      height: "100vh",
      width: "100vw",
    },
    exit: {
      height: "100vh",
      width: "100vw",
    }
  };
  const V_ContainerOrangeSeparation = {
    initial: {
      width: "1vw",
      height: "0",
      position: "absolute",
      left: "50%",
    },
    animate: {
      width: ["1vw", "50vw"],
      height: "100vh",
        transition: {
            times: [0.5, 1],
        }
    },
    exit: {
      height: "0",
    }
  };
  
const Skill = () => {
  return (
      <div className="flex flex-col">
          <Link to="/home" className="text-red-500 absolute">Hello</Link>
        <motion.div
            className="bg-orange-500"
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
            className="bg-white"
            variants={V_ContainerOrangeSeparation}
            initial="initial"
            animate="animate"
            exit="exit"
        >
        </motion.div>
    </div>
  );
};

export default Skill;
