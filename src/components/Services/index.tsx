import {Card } from '@/components/Card'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Services(){
  return(
    
    <div id="services"
    className=" w-screen lg:h-[650px] 
     bg-white flex flex-col lg:mt-0 justify-center items-center">
        
        <a href='https://wa.me/5512988488829'  
        className='flex pt-10 lg:pt-0 items-center justify-center w-[330px] h-[60px]' >
        <div
        className=' bg-[#25d366] p-5
        rounded-xl flex justify-center items-center
        hover:bg-[#25d399] 
        hover:shadow-lg hover:shadow-[#25d399]
        ' >
        
        <p className="text-xl text-white flex items-center" >
          <FaWhatsapp className="w-[40px] h-[40px] text-white
           bg-[#25d366]   " />
          Faça um orçamento agora </p>
        
        </div>
          </a>
        
      <div className=" mt-10 flex gap-5 justify-center w-full  ">
       
       <div className='block gap-7 xl:flex ' >
       
       <Card refri={"refrigeração"} refridescription='
       Voce pode continuar sofrendo esse calor ou pode nos chamar para
       Manutenção, refrigeração e instalação de arcondicionado' />
       
       <Card  eletrica={"Eletrica"} 
       eletricadescription='"Pode deixar eu mesmo faço" não de uma de sabidão
       chame um profissional para voce nao ter que lidar com um possivel incendio
       instalamos quadro e painel eletrico, realizamos vistorias revisamos todo 
       seu sistema eletrico para deixa-lo realmenteseguro'/>

       <Card hidra={"hidraulica"} hidradescription='
       Realizamos todo tipo de serviços na parte hidraulica, conserte 
       seu vazamento o quanto antes e pare de pagar a conta 
       de agua com o preço nas alturas' />
       </div>
       
       </div>
    </div>
    
  )
}