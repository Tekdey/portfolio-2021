import React, { useEffect,  useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Panda from "../assets/images/panda.png";
import { SkillFrontData } from "../skill_front";
import { SkillBackData } from "../skill_back";


const SkillBack = () => {

  const local = JSON.parse(localStorage.getItem('skill'))
  const navigate = useNavigate()
  const [smallDevice, setSmallDevice] = useState(window.innerWidth < 768 ? true : false)
  const [isFront, setIsFront] = useState(local?.isFront || false)



  useEffect(() => {
    localStorage.clear()

    function listenResize() {
        window.innerWidth < 768 ? setSmallDevice(true) : navigate('/skills')
    }
    window.addEventListener('resize', listenResize)

    return () => (
      window.removeEventListener('resize', listenResize)
    )

  }, [navigate, smallDevice])


  return (
      <div className="flex flex-col h-screen w-screen">
        {/* 
        *                         First Layer (Orange) 
        */}
         <motion.div
            className="bg-orange-500"
            initial= {{
              position: "absolute",
              height: "0",
              width: "100vw"
            }}
            animate= {{
              height: "0",
              width: "100vw",
              display: "none"
            }}
            exit= {{
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
         {
           !smallDevice && (
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
            exit={{
              scale: 0,
              transition: { ease: "easeInOut" },
            }}
        />
           )
         }
        {/* 
        *                         Second layer (Black) 
        */}
        <motion.div
            className="bg-black "
            initial={{
              height: "50vh",
              width: "100vw",
            }}
            animate={{
              height: "9vh",
              width: "100vw",
            }}
            exit={{
              height: "100vh",
              width: "100vw",
            }}>

            <motion.h1 
            className="text-white w-full h-full flex justify-center items-center text-4xl" 
            exit={{display: "none"}}
            >
              {isFront ? "Front" : "Back"}
            </motion.h1> 

        </motion.div>
        {/* 
        *                         Third layer (White) 
        */}
        <motion.div
            className="bg-white"
            initial={{
              height: "50vh",
              with: "100vw",
            }}
            animate={{
            height: "100vh",
            with: "100vw",
              
          }}
            exit={{
              height: "0",
            }}
        >
          {
             //             Contenu
          }
         
            <motion.ul className="w-full flex flex-col p-10 mix-blend-difference"
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            exit={{display: "none"}}
            >
               { isFront ? (
                        SkillFrontData.map((item, index) => {
                          return (
                            <li key={index} className="flex py-1 text-xl flex-col">
                            <h4 className=" min-w-[153px] text-white">{item.name}</h4>
                              <motion.div 
                              className="w-24 h-7 bg-white flex justify-center items-center"
                              initial={{width: 0}}
                              animate={{width: (item.knowledge - 10) + "%", transition:{delay: 0.001 + index / 5, duration: 0.5}}}
                              >
                                <span className="text-black" >{item.knowledge} %</span>
                              </motion.div>
                          </li>
                          )
                        })
                        ):(

                        SkillBackData.map((item, index) => {
                          return (
                            <li key={index} className="flex py-1 text-xl flex-col">
                            <h4 className=" min-w-[153px] text-white">{item.name}</h4>
                              <motion.div 
                              className="w-24 h-7 bg-white flex justify-center items-center"
                              initial={{width: 0}}
                              animate={{width: (item.knowledge - 10) + "%", transition:{delay: 0.001 + index / 5, duration: 0.5}}}
                              >
                                <span className="text-black" >{item.knowledge} %</span>
                              </motion.div>
                          </li>
                          )
                        })
                          
                          )}
                    </motion.ul>
        </motion.div>
        {/* 
        *                         Square layer (Back & White) 
        */}
        
        <motion.section 
        className="mix-blend-difference border-4 text-white border-black h-5/6 bg-blend-difference w-11/12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: 0
        }}
        >
          <div className=" border-4 w-full h-full flex flex-col md:flex-row">
          
            </div>    
        </motion.section>

        {smallDevice && (   
        <motion.nav 
        className="w-full bottom-0 fixed border-t-4 border-black  bg-black"
        initial={{
          height: "0"
        }}
        animate={{
          height: "86px"
        }}
        exit={{
          top: "100vh"
        }}
        >
          <ul className="flex justify-around items-center text-4xl w-full h-full mix-blend">
            <li className="cursor-pointer w-full h-full">
              <NavLink 
              to="/skills/smallScreen" 
              className="h-full w-full  flex items-center  justify-start pl-5 xs:justify-around" 
              onClick={() => setIsFront(true)}
              style={{
                background: isFront ? "white" : "black", color: isFront ? "black" : "white" 
              }}>
                Front
              </NavLink>
              </li>
              <motion.img
                src={Panda}
                onClick={() => navigate('/home')}
                alt="panda"
                className={
                "h-[100px] sm:h-[150px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
                exit={{
                  scale: 0,
                  transition: { ease: "easeInOut" },
                }}
            />
            <li className="cursor-pointer w-full h-full flex items-center justify-end xs:justify-around">
              <NavLink to="/skills/smallScreen" className="h-full w-full  flex items-center  justify-end pr-5 xs:justify-around" 
              onClick={() => setIsFront(false)}
              style={{
                background: isFront ? "black" : "white", color: !isFront ? "black" : "white" 
              }}>
                Back
              </NavLink>
              </li>
          </ul>
        </motion.nav>
        )}
   </div>
  );
};

export default SkillBack;
