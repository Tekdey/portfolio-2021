import React, { useEffect, useState } from "react";
import Panda from "../assets/images/panda.png";
import {motion} from "framer-motion"
import {vLogo} from "../utils/framerMotion"



const Logo = ({handleStart, start}) => {

    const [startx, setStart] = useState()

    useEffect(() => {
        setStart(start)
    }, [start])

  return (
          <motion.img
            src={Panda}
            alt="panda"
            className="h-[200px] md:h-[250px] xl:h-[300px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            draggable="false"
            onClick={handleStart}
            variants={vLogo}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="visible"
            exit="exit"
        />
  )
};

export default Logo;
