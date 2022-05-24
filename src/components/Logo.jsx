import React, { useEffect, useState } from "react";
import Panda from "../assets/images/panda.png";
import {motion} from "framer-motion"


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

const Logo = ({handleStart, start}) => {


    const [startx, setStart] = useState()

    useEffect(() => {
        setStart(start)
    }, [start])

  return (
          <motion.img
            src={Panda}
            alt="panda"
            className={
            "h-[200px] md:h-[250px] xl:h-[300px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
            draggable="false"
            onClick={handleStart}
            variants={V_Logo}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="visible"
            exit="exit"
        />
  )
};

export default Logo;
