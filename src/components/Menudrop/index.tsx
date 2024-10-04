'use client'

import { motion }  from 'framer-motion'
import React from "react";

interface PropsChangeMenu{
  menu:boolean;
}

export default function Menudrop(props:PropsChangeMenu) {
  return (
    <>
    {
      
      props.menu ?           
   <motion.div 
    animate={{ right:0 }}
    transition={{ duration: 0.5, ease: "easeInOut",}}
    exit={{right:-20  }}  
   
   className=" rounded-l-full rounded-b-full 
   bg-[#ffffff90] w-52 fixed -right-52 
   top-44 h-screen ease-[0.76, 0 , 0.24, 1] " >
        <motion.ul 
        initial={{opacity:0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5}}
        
        className="inline-grid grid-cols-1  
        text-lg font-bold w-full text-black ">

        <li className="hover:bg-[#F1C40F] duration-300 
        p-5 flex justify-center ">
          <a href="#home">home</a>
        </li>
        <li className="hover:bg-[#F1C40F] duration-300 p-5 flex justify-center ">
          <a href="#services">serviços</a>
          </li>
        <li className="hover:bg-[#F1C40F] duration-300 p-5 flex justify-center ">
          <a href="#education">sobre empresa</a>
          </li>
        <li className="hover:bg-[#F1C40F] duration-300 p-3 flex justify-center ">
          <a href="#contact">contato</a>
          </li>
        </motion.ul>
   </motion.div>
   :

<></>
}
  </>
  );
}
