import { Noto_Serif_Bengali}  from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Menudrop from '../../Menudrop';
import { useState } from 'react';
import AAPLogo from '../../../../public/LogoAAP.png'

export default function Header(){
 
  const tela = false
 const [menu, setMenu] = useState(false);
  
 function menudrop(){
  
      setMenu(() => !menu)
  }

  return(
    <section id="home" >
    <header className="z-50 fixed top-0 pb-12
      w-full h-32 bg-slate-50/10  flex justify-between ">
           
           <div className='w-[150px] flex justify-between 
           items-center ml-5 mt-16 
            '> 
           <a href="#home">
            <Image src={AAPLogo} alt='logo da aap'
            className='w-[70px] h-[70px] lg:w-[140px] lg:h-[140px] '
            />
           </a>
             
           {
            tela ? 
            <nav className='w-[50%]' >
            <ul className='flex justify-evenly' >
              <li> Home </li>
              <li> Services </li>
              <li> Education </li>
              <li> Skils </li>
              <li> Contact </li>
            </ul>
          </nav> : 
          <>
          <button onClick={menudrop} 
          className='hover:bg-yellow-400 
           p-5 bg-yellow-500 -mt-3 -mr-3
          duration-300 fixed right-5 rounded-lg text-black hover:text-white 
          font-semibold ' >
            Menu
            </button>
            <Menudrop menu={menu} />
          </> 
           }
           </div>
    </header>
  
    </section>
  )
}





