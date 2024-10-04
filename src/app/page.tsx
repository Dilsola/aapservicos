'use client'

import Header from '@/components/Services/Header';
import  Services  from '@/components/Services';
import  MyCompany  from '@/components/Profile/MyCompany';
import { Testimonials } from '@/components/Testimonials';
import {BackAnime} from '@/components/BackAnime/index'
import { Contact} from '@/components/Form';
import { FaWhatsapp } from "react-icons/fa6";
import {FooterSection} from '@/components/FooterSection'

export default function Home() {
  
  

  return (
    <div  className='overflow-hidden'>
    <div className=' z-50 fixed bottom-12 right-10 ' >
        <a href='https://wa.me/5512988488829?text=Oi+estou+precisando+fazer+um+orçamento+vim+pelo+seu+site' className='w-full h-full' >
        <FaWhatsapp color='#fff' 
        className='w-[50px] h-[50px] bg-[#25D366] 
        rounded-full shadow-[#25d366] shadow-lg '  />
        </a>
    </div>

     <div className='w-screen' >
     <BackAnime/>
    <Header />
    <div className='relative block w-full' >
    <Services/>
    <MyCompany/>
    <Testimonials/>
    <Contact/>
    <FooterSection/>
    </div>
    </div>  
  
  </div>
      );
}
//comentando