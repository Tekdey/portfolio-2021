import React, { useEffect,  useState } from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Panda from "../assets/images/panda.png";
import { SkillFrontData } from "../skill_front";
import { SkillBackData } from "../skill_back";

import {vSkillSmallScreen} from "../utils/framerMotion"


const SkillSmallScreen = () => {

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
      <main className="flex flex-col h-screen w-screen">
        {/* 
        *                         First Layer (Orange) 
        */}
         <motion.div variants={vSkillSmallScreen.containerOrange} initial="initial" animate="animate" exit="exit" className="bg-orange-500"></motion.div>
            
        {/* 
        *                         Logo 
        */}
         {
           !smallDevice && (
            <motion.img onClick={() => navigate('/home')} src={Panda} alt="panda" draggable="false"
            variants={vSkillSmallScreen.logo} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit"
            className="h-[100px] sm:h-[150px] md:h-[250px] xl:h-[300px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           )
         }
        {/* 
        *                         Second layer (Black) 
        */}
        <motion.div variants={vSkillSmallScreen.containerBlack} initial="initial" animate="animate" exit="exit" className="bg-black">
            
            <motion.h1 exit={{display: "none"}} className="text-white w-full h-full flex justify-center items-center text-4xl" >
              {isFront ? "Front" : "Back"}
            </motion.h1> 

        </motion.div>
        {/* 
        *                         Third layer (White) 
        */}
        <motion.div variants={vSkillSmallScreen.containerWhite} initial="initial" animate="animate" exit="exit" className="bg-white">
           
          {
             //             Contenu
          }
         
            <motion.ul className="w-full flex flex-col p-10 mix-blend-difference"
            variants={vSkillSmallScreen.skillContainer} initial="initial" animate="animate" exit="exit">
            
               { isFront ? (
                        SkillFrontData.map((item, index) => {
                          return (
                            <li key={index} className="flex py-1 text-xl flex-col">
                            <h4 className=" min-w-[153px] text-white">{item.name}</h4>
                              <motion.div 
                              className="w-24 h-7 bg-white flex justify-center items-center"
                              variants={vSkillSmallScreen.skillFront} custom={{ item, index }} initial="initial" animate="animate" exit="exit">
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
                              <motion.div variants={vSkillSmallScreen.skillBack} custom={{ item, index }} initial="initial" animate="animate"
                               className="w-24 h-7 bg-white flex justify-center items-center">
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
        
        <motion.section variants={vSkillSmallScreen.containerBlackAndWhite} initial="initial" animate="animate"
                        className="mix-blend-difference border-4 text-white border-black h-5/6 bg-blend-difference w-11/12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className=" border-4 w-full h-full flex flex-col md:flex-row"></div>   
        </motion.section>

        {smallDevice && (   
            <motion.nav variants={vSkillSmallScreen.navigation} initial="initial" animate="animate" exit="exit"
                        className="w-full bottom-0 fixed border-t-4 border-black  bg-black">
            
                <ul className="flex justify-around items-center text-4xl w-full h-full mix-blend">
                  
                  <li className="cursor-pointer w-full h-full">
                    <NavLink onClick={() => setIsFront(true)} to="/skills/smallScreen" 
                    className="h-full w-full  flex items-center  justify-start pl-5 xs:justify-around" 
                    style={{background: isFront ? "white" : "black", color: isFront ? "black" : "white" }}>Front</NavLink>
                  </li>

                  {/*
                  *   logo
                  */}
                  
                    <motion.img onClick={() => navigate('/home')} src={Panda} alt="panda" draggable="false"
                      className="h-[100px] sm:h-[150px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      variants={vSkillSmallScreen.logo} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit" />
                
                    <li className="cursor-pointer w-full h-full flex items-center justify-end xs:justify-around">
                      <NavLink onClick={() => setIsFront(false)} to="/skills/smallScreen" 
                      className="h-full w-full  flex items-center  justify-end pr-5 xs:justify-around"
                      style={{
                        background: isFront ? "black" : "white", color: !isFront ? "black" : "white" 
                      }}>Back</NavLink>
                    </li>
                </ul>
            </motion.nav>
        )}
   </main>
  );
};

export default SkillSmallScreen;
