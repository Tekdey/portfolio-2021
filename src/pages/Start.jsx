import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import {vStart} from "../utils/framerMotion.js"

function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return (
    <motion.main variants={vStart.container} initial="hidden" animate="visible" exit="exit" className="flex h-screen">
      {/* 
      *     Animated containers
      */}
      <motion.div variants={vStart.containerOrange} initial="initial" exit="exit" className="flex items-center justify-center bg-orange-500"></motion.div>
      <motion.div variants={vStart.containerBlack} initial="initial" exit="exit" className="bg-black"></motion.div>
       
      <Logo handleStart={handleStart} />
      <motion.span variants={vStart.logo_Span} initial="initial" animate="animate" exit="exit" className="absolute top-1/3 left-1/2 text-orange-500 -translate-x-1/2 translate-y-5 mix-blend-difference cursor-pointer">Click here</motion.span>
    </motion.main>
  );
}

export default Start;
