import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Panda from "../assets/images/panda.png";
import {SkillBackData} from "../skill_back"
import {SkillFrontData} from "../skill_front"
import { unmountComponentAtNode } from "react-dom";


const Skill = () => {

  const navigate = useNavigate()
  const [isFront, setIsFront] = useState(null)
  const [smallDevice, setSmallDevice] = useState(window.innerWidth <= 768 ? true : false)

  useEffect(() => {
    function listenResize() {
      window.innerWidth <= 768 ? setSmallDevice(true) : setSmallDevice(false)
    }
    window.addEventListener('resize', listenResize)

    return () => (
      window.removeEventListener('resize', listenResize)
    )
  }, [])
   
  return (
      <div className="flex flex-col h-full w-full">
        {/* 
        *                         First Layer (Orange) 
        */}
        <motion.div
            className="bg-orange-500"
            initial= {{
              height: "0",
              width: "100vw"
            }}
            animate= {{
              height: "0",
              width: "100vw",
              display: "none"
            }}
            exit= { smallDevice ? {
              height: "0",
              width: "0",
            } : {
              height: "100vh",
              width: "100vw",
              position: "absolute",
              transition: {
                  delay: 0.5, 
              }
            }}
        ></motion.div>
        {/* 
        *                         Logo 
        */}
         <motion.img
            src={Panda}
            onClick={() => navigate('/home')}
            alt="panda"
            className={
            "h-[100px] sm:h-[150px] md:h-[250px] xl:h-[300px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            }
            draggable="false"
            initial={{
              scale: 0,
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: 1,
              x: "-50%",
              y: "-50%",
              transition: {
                delay: 0.5
              }
            }}
            whileHover={{
              scale: 0.9
            }}
            whileTap={{
              scale: 1.2,
            }}
            exit={ isFront === null ? {
              scale: 0,
              transition: { ease: "easeInOut" },
            } : {

            }}
        />
        {/* 
        *                         Second layer (Black) 
        */}
        <motion.div
            className="bg-black "
            initial={{
              height: "100vh",
              width: "100vw",
            }}
            animate={{
              height: "100vh",
              width: "100vw",
            }}
            exit={ isFront === null ? {
              height: "100vh",
              width: "100vw",
            } : {
                
            }
            }>
        </motion.div>
        {/* 
        *                         Third layer (White) 
        */}
        <motion.div
            className="bg-white flex justify-center items-center"
            initial={smallDevice ? {
              height: "1vh",
              with: "0",
              position: "absolute",
              top: "50%",
              left: 0
            } : {
              width: "1vw",
              height: "0",
              position: "absolute",
              left: "50%",
              top: 0
            } }
            animate={smallDevice ? {
              top: "50%",
              left: "0",
              width: "100vw",
              height: ["1vh", "100vh"],
              transition: {
                times: [0.5, 1],
            }
            } : {
              width: ["1vw", "50vw"],
              height: "100vh",
              left: "50%",
              top: 0,
                transition: {
                    times: [0.5, 1],
                }
            } }
            exit={smallDevice && isFront === null ? {
              width: "0",
            } : !smallDevice ? {
              left: "200vw"
            } :  (isFront || !isFront) && {
              width: "100vw",
            }}
        >
        </motion.div>
        {/* 
        *                         Square layer (Back & White) 
        */}
        <motion.section 
        className=" mix-blend-difference border-4 text-white border-black bg-blend-difference absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        initial={smallDevice ? {
          height: "0",
          width: "91.666667%",
          opacity: 0,
        } : {
          height: "83.333333%",
          width: "0",
          opacity: 0,
        }}
        animate={{
          height: "83.333333%",
          width: "91.666667%",
          opacity: 1,
          transition: {
            delay: 1,
            duration: 2
          }
        }}
        exit={smallDevice && isFront === null  ? {
          position: "absolute",
          left: "-100vw",
          opacity: 0,
        } : !smallDevice ? {
          position: "absolute",
          top: "200vh",
          opacity: 0,
        } :  (isFront || !isFront) && {
          
        } }
        >
            <div className={smallDevice ? "border-4 w-full h-full flex flex-col" : "border-4 w-full h-full flex flex-row"}>
                <div className={smallDevice ? "flex justify-center items-center w-full h-full" : "block justify-center items-center w-full h-full"}>
                  <h1 className="text-center text-5xl relative md:-translate-y-1/2">
                   { smallDevice ?
                      <Link to="/skills/smallScreen" className="md:bg-black md:px-5 " onClick={() =>{
                         localStorage.setItem('skill', JSON.stringify({isFront: true}));
                          setIsFront(true)
                        }}>Front</Link>
                      : 
                      <span className="md:bg-black md:px-5 ">Front</span>
                    }
                  </h1>
                  { !smallDevice &&
                    <motion.ul className="w-full flex flex-col p-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 2.5, duration: 1}}}
                    >
                      {
                        SkillFrontData.map((item, index) => {
                          return (
                            <li className="flex py-1 text-xl flex-col w-full">
                            <h4 className=" min-w-[200px]">{item.name}</h4>
                              <motion.div 
                              key={index} 
                              className="w-24 h-7 bg-white flex justify-center items-center"
                              initial={{width: 0}}
                              animate={{width: (item.knowledge - 10) + "%", transition:{delay: 3 + index / 5, duration: 0.5}}}
                              >
                                <span className="text-black" >{item.knowledge} %</span>
                              </motion.div>
                          </li>
                          )
                        })
                      }
                    </motion.ul>
                  }
                </div>
                <div className={smallDevice ? "flex justify-center items-center w-full h-full" : "block justify-center items-center w-full h-full"}>
                  <h1 className="text-center text-5xl relative md:-translate-y-1/2">
                  { smallDevice ?
                    <Link to="/skills/smallScreen" className="md:bg-black md:px-5" onClick={() => {
                      localStorage.setItem('skill', JSON.stringify({isFront: false}))
                      setIsFront(false)
                    }}>Back</Link>
                    : 
                    <span className="md:bg-black md:px-5 ">Back</span>
                  }
                  </h1>
                  { !smallDevice &&
                  <motion.ul className="w-full flex flex-col items-end p-10"
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 2.5, duration: 1}}}
                  >
                      {
                        SkillBackData.map((item, index) => {
                          return (
                            <li className="flex py-1 text-xl flex-col w-full items-end">
                            <h4 className=" min-w-[150px] items-end flex justify-end">{item.name}</h4>
                              <motion.div 
                              key={index} 
                              className="w-24 h-7 bg-white flex justify-center items-center "
                              initial={{width: 0}}
                              animate={{width: (item.knowledge - 10) + "%", transition:{delay: 3 + index / 5, duration: 0.5}}}
                              >
                                <span className="text-black" >{item.knowledge} %</span>
                              </motion.div>
                          </li>
                          )
                        })
                      }
                    </motion.ul>
                }
                </div>
            </div>    
        </motion.section>
    </div>
  );
};

export default Skill;
