import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const V_Container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    delay: 1.5,
    duration: 1.5,
  },
};

const V_ContainerOrange = {
  initial: {
    width: "50vw",
  },
  transition: {
    delay: 1.5,
    duration: 1.5,
  },
  exit: {
    width: "100vw",
    transition: { ease: "easeInOut" },
  },
};

const V_ContainerBlack = {
  initial: {
    width: "50vw",
  },
  transition: {
    delay: 1.5,
    duration: 1.5,
  },
  exit: {
    width: "0vw",
    transition: { ease: "easeInOut" },
  },
};

const V_Logo_Span = {
  initial: {
    x: "-50%",
    y: "-50%",
  },
  exit: {
    scale: 0,
    transition: { ease: "easeInOut" },
  },
};

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return (
    <motion.div
      className="flex h-screen"
      variants={V_Container}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="flex items-center justify-center bg-orange-500"
        variants={V_ContainerOrange}
        initial="initial"
        exit="exit"
      ></motion.div>
      <motion.div
        className="bg-black "
        variants={V_ContainerBlack}
        initial="initial"
        exit="exit"
      ></motion.div>

      <Logo handleStart={handleStart} />
      <motion.span
        className="absolute top-1/3 left-1/2 text-orange-500 -translate-x-1/2 translate-y-5 mix-blend-difference cursor-pointer"
        variants={V_Logo_Span}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Click here
      </motion.span>
    </motion.div>
  );
}

export default Home;
