'use client'

import Image from 'next/image'
import ArCond from '../../../public/ArCondicionado.jpg'
import Eletrica from '../../../public/Eletrica.jpg'
import Hidra from '../../../public/hidra.jpg'

import {motion} from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import React from 'react'

//tailwindmerge

// import React, { useState, useEffect, useRef } from 'react'
// import CELLS from 'vanta/dist/vanta.fog.min'

// export function BackAnime(props:any) {
//   const [vantaEffect, setVantaEffect] :any = useState(null)
//   const myRef = useRef(null)
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(CELLS({
//         el: myRef.current,
//         mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   highlightColor: 0x7cbf0,
//   midtoneColor: 0xd37ff,
//   lowlightColor: 0x0000,
//   baseColor: 0xffffff,
//   speed: 4.90
//       }))
//     }
//     return () => {
//       if (vantaEffect ) vantaEffect.destroy() 
//     }
//   }, [vantaEffect])

export function BackAnime(){  

  return( 
    <>
    <p className='absolute flex pt-10 lg:pt-0 z-[100] bg-gray-600/50
        lg:top-[200px] lg:left-[600px] -top-[500px] p-10
        text-3xl font-bold pl-2
        ' >
          Instalação e manutenção de Ar condicionado, <br />
          serviço de eletricista residencial,<br />
          serviços de hidraulica no geral<br />

        </p>
    <a href='https://wa.me/5512988488829?text=Oi+estou+precisando+fazer+um+orçamento+vim+pelo+seu+site'  
        className=' absolute flex pt-10 lg:pt-0 z-[100] 
        lg:top-[370px] lg:left-[590px] -top-[500px]
        items-center justify-center w-[330px] h-[60px]' >
        <div
        className=' bg-[#25d366] p-5
        rounded-xl flex justify-center items-center hover:bg-[#25d399] 
        hover:shadow-lg hover:shadow-[#25d399]
        ' >
        
        <p className="text-xl text-white flex items-center" >
          <FaWhatsapp className="w-[40px] h-[40px]
          rounded-full
          text-white bg-[#25d366]" />
          Faça um orçamento agora </p>
        
        </div>
          </a>
          
    <div id="home" className='overflow-x-hidden'>

<motion.div className='flex overflow-y-clip '
animate={{
          translateX:"-200%"
         }}

         transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"

         }}
         >

  <Image src={ArCond} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Eletrica} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Hidra} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={ArCond} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Eletrica} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Hidra} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
   
  <Image src={ArCond} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Eletrica} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Hidra} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' /> 
  <Image src={ArCond} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Eletrica} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20  lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
  <Image src={Hidra} alt='seila' className=' bg-no-repeat bg-center 
    lg:-mt-20 lg:h-screen h-[200px] lg:w-screen w-screen bg-cover' />
   
   </motion.div>
   </div>
</>
  )
}


  {/* <div id='home' className='lg:bg-nuvemBack bg-DeseNuvem 
    bg-no-repeat bg-center 
    lg:-mt-10 lg:-mb-10 h-screen lg:w-screen w-500px bg-cover '>
  </div> */}
