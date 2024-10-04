"use client"

import { TbAirConditioning } from "react-icons/tb";
import { BsOutlet } from "react-icons/bs";
import { FaFaucetDrip } from "react-icons/fa6";

interface IconsProps{
  refri?: string;
  refridescription?:string; 
  eletrica?: string;
  eletricadescription?:string; 
  hidra?: string;
  hidradescription?:string;
}

export function Card(props: IconsProps){
  return(
    <div className=" duration-300 group sombra flex-col text-center 
    justify-center items-center bg-slate-100 
    rounded-3xl p-4 mb-4
    h-[400px] w-80 border-solid 
    border-black border-spacing-5 
     hover:bg-black hover:text-black 
    " >
      { props.refri ?
     <>
     <TbAirConditioning size={100} 
     className=" text-cyan-300 w-full 
     group-hover:text-yellow-300 " />
       
      
      <h2 className="text-cyan-300 text-xl 
   group-hover:text-yellow-300 font-bold " >
          {props.refri}
    </h2>
    <br />
    <p className="text-black group-hover:text-yellow-300 " >
      {props.refridescription}
      </p>      
      <br />
      </>: <></>
      }
      
      {  props.eletrica ?
     <>
     <BsOutlet size={100} 
     className=" text-yellow-300 w-full 
      " />
      
      
      <h2 className="text-yellow-300 text-xl 
    font-bold " >
          {props.eletrica}
    </h2>
    
    <p className=" font-sm text-black group-hover:text-yellow-300 " >
      {props.eletricadescription}
      </p>      
      </>:<></>
      }
      
      { props.hidra ?
     <>
     <FaFaucetDrip size={100} 
     className=" text-rose-600 w-full 
     group-hover:text-yellow-300 " />
    
      <h2 className="text-rose-600 text-xl 
   group-hover:text-yellow-300 font-bold " >
          {props.hidra}
    </h2>
    
    <p className="text-black group-hover:text-yellow-300 " >
      {props.hidradescription}
      </p>      
      <br />
      <br />
      </>:<></>
      }
        <br />
       <a href="#contact" className="bg-white
      text-black p-4
      h-10 w-28 rounded-xl  border-solid border-2 border-black
      shadow-black shadow-md
      group-hover:bg-black 
      group-hover:border-yellow-300
      group-hover:shadow-yellow-300 
      group-hover:text-yellow-300 
      " >
        Deixar contato
      </a>
    </div>

)
}




