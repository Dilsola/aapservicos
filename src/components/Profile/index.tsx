'use client'

import Image from 'next/image'
import BackDef from '../../../public/Luazulnova.png'
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Profile(){
  return(
    <>
    <div  className=" bg-red-600 max-sm:right-20 top-0 right-[39rem] 
    flex-1 flex items-center justify-center lg:mt-10 -mt-[400px] mx-44" >
    
    
       
    {/* <Image  className='mix-blend-hard-light 
    fixed rounded-full 
    lg:top-60
    top-44
    right-auto 
    left-auto '
      src={ProfileEd}
      alt={'lua cheia'}
      width={306}
      height={306}
      /> */}
       
      <div className=' fixed lg:top-56 top-40 flex 
      border-solid border-8 shadow-lg shadow-cyan-300 
      border-cyan-300 border-shadow      
      w-[400px] h-[400px] 
      rounded-full justify-center items-center
      mix-blend-hard-light
      transition duration-1000
       hover:mix-blend-soft-light
       hover:opacity-20' >
      
      <Image className=' mix-blend-soft-light ml-3 '
      src={BackDef}
      alt={'lua cheia'}
      width={400}
      height={400}
      />
      
    
      </div>
      
    </div>

    <div className='relative bg-black mt-0 text-center w-screen' >
    <h1 className="text-6xl text-white font-bold text-center " > Oi eu sou Daniel <br />
      
      <span data-text={'FRONT_END_DEVELOPER'} className=' 
      devcolor  text-2xl relative text-black w-screen' > 
      FRONT_END_DEVELOPER
      </span>
      </h1>
      <p>
      Oi, eu sou o Daniel um desenvolvedor Front-end, 
      Eu construo lojas online, portifolios, 
      blogues, etc. <br /> 
      Tambem aceito parcerias com UX-UI Designers, 
      Se voce estiver interessado em algum dos meus serviços 
      como desenvolvedor ou quiser fechar uma parceria comigo, 
      me chame em um dos meus canais de contato abaixo.

      </p>
        <br />
      <div className='flex text-center justify-center gap-5'>
        <a className=' duration-300 rounded-full hover:text-black hover:bg-cyan-300 hover:scale-150  ' href="https://github.com/DanteNero007"> <FaGithub size={40}/> </a>
        <a className=' duration-300 hover:text-black hover:bg-cyan-300 hover:scale-150' href="https://www.linkedin.com/in/daniel-henrique-832656181"><FaLinkedin size={40} /> </a>
        <a className=' duration-300  hover:rounded-xl hover:text-black hover:bg-cyan-300 hover:scale-150' href="https://www.instagram.com/henriqueea007?utm_source=qr&igsh=emt1Y3VhcHZ1OTVv "> <FaInstagram size={40} /> </a>
        <a className=' duration-300 hover:rounded-full hover:text-black hover:bg-cyan-300 hover:scale-150' href="https://wa.me/5512992494887/? text=Oi estou interessado em um de seus serviços"> <FaWhatsapp size={40} /> </a>
      </div>
      <br />
    </div>
  </>
    )
}