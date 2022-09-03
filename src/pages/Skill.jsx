import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import Panda from "../assets/images/panda.png";
import {SkillBackData} from "../skill_back"
import {SkillFrontData} from "../skill_front"
import {vSkill} from "../utils/framerMotion"


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
   
console.log(smallDevice);
  

  return (
      <main className="flex flex-col h-full w-full">
        {/* 
        *                         First Layer (Orange) 
        */}
        <motion.div variants={vSkill.containerOrange} custom={smallDevice} initial="initial" animate="animate" exit="exit" className="bg-orange-500"></motion.div>
        
        {/* 
        *                         Logo 
        */}
         <motion.img src={Panda} onClick={() => navigate('/home')} alt="panda" draggable="false"
            variants={vSkill.logo} custom={isFront} initial="initial" animate="animate" whileHover="hover" whileTap="tap" exit="exit"
            className="h-[100px] sm:h-[150px] md:h-[250px] xl:h-[300px] cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
           
        {/* 
        *                         Second layer (Black) 
        */}
        <motion.div
            className="bg-black "
            variants={vSkill.containerBlack} custom={isFront} initial="initial" animate="animate" exit="exit"></motion.div>
           
        
        {/* 
        *                         Third layer (White) 
        */}
        <motion.div className="bg-white flex justify-center items-center"
                    variants={vSkill.containerWhite} custom={{isFront, smallDevice}} initial="initial" animate="animate" exit="exit"></motion.div> 
        
        {/* 
        *                         Square layer (Back & White) 
        */}
        <motion.section className=" mix-blend-difference border-4 text-white border-black bg-blend-difference absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        variants={vSkill.containerBlackAndWhite} custom={{isFront, smallDevice}} initial="initial" animate="animate" exit="exit">
        
            <div className={smallDevice ? "border-4 w-full h-full flex flex-col" : "border-4 w-full h-full flex flex-row"}>
                <div className={smallDevice ? "flex justify-center items-center w-full h-full" : "block justify-center items-center w-full h-full"}>
                  <h1 className="text-center text-5xl relative md:-translate-y-1/2">
                   { smallDevice ?
                      <Link to="/skills/smallScreen" className="md:bg-black md:px-5 " onClick={() =>{
                        //  localStorage.setItem('skill', JSON.stringify({isFront: true}));
                         console.log('pass');
                          setIsFront(true)
                        }}>Front</Link>
                      : 
                      <span className="md:bg-black md:px-5 ">Front</span>
                    }
                  </h1>
                  { !smallDevice &&
                    <motion.ul className="w-full flex flex-col p-10"
                      variants={vSkill.frontContainer} initial="initial" animate="animate">
                   
                      {
                        SkillFrontData.map((item, index) => {
                          return (
                            <li key={index} className="flex py-1 text-xl flex-col w-full">
                              <h4 className="min-w-[200px]">{item.name}</h4>
                                <motion.div variants={vSkill.frontContainerContent} custom={{item, index}} initial="initial" animate="animate" className="w-24 h-7 bg-white flex justify-center items-center">
                                  <span className="text-black" >{item.knowledge} %</span>
                                </motion.div>
                            </li>
                          )})}
                    </motion.ul>
                  }
                </div>
                <div className={smallDevice ? "flex justify-center items-center w-full h-full" : "block justify-center items-center w-full h-full"}>
                  <h1 className="text-center text-5xl relative md:-translate-y-1/2">
                      { smallDevice ?
                        <Link to="/skills/smallScreen" className="md:bg-black md:px-5" onClick={() => {setIsFront(false)}}>Back</Link>
                          // localStorage.setItem('skill', JSON.stringify({isFront: false}))
                          :
                          <span className="md:bg-black md:px-5 ">Back</span>
                      }
                  </h1>
                  { !smallDevice &&
                    <motion.ul variants={vSkill.backContainer} initial="initial" animate="animate" className="w-full flex flex-col items-end p-10">
                                {
                                  SkillBackData.map((item, index) => {
                                    return (
                                      <li key={index} className="flex py-1 text-xl flex-col w-full items-end">
                                      <h4 className=" min-w-[150px] items-end flex justify-end">{item.name}</h4>
                                        <motion.div variants={vSkill.backContainerContent} custom={{item, index}} initial="initial" animate="animate" className="w-24 h-7 bg-white flex justify-center items-center ">
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
    </main>
  );
};

export default Skill;
