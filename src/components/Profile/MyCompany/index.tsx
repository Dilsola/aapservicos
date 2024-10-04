
import Image from 'next/image'

export default function MyCompany(){
  return(
    <div id='education' className='   mt-0  ' >
    <div className=" flex justify-center  
     bg-black  shadow-2xl 
     border-2 border-solid border-black " >
      <h2 className='font-bold pt-5 text-[#F1C40F] text-5xl mb-12' >
        A.A.P-serviços</h2>      
    </div>
    <div className='lg:flex lg:justify-evenly '  >
    <div className='py-20 bg-black xl:flex xl:justify-center ' >
      
      <div className=' mt-5 duration-300 shadow-[#F1C40F]  
      shadow-lg p-5 rounded-3xl ml-auto mr-auto xl:mr-0 xl:ml-0
      gradbg group w-[380px] lg:w-[420px] h-[280px] pb-10 ' >
              <h2 className='text-2xl font-bold text-yellow-300
               group-hover:text-black' >A.A.P-serviços </h2>
              <h2 className='text-2xl font-bold text-yellow-300
              group-hover:text-black ' >
                serviços em geral </h2>
              <br />
              <ul className=' font-bold group-hover:text-black  ' >
              
                <li>Instalação e manutenção de ar condicionado</li>
                <li>Intalação de painel eletrico e vistoria eletrica</li>
                <li>Instalação e manutenção hidraulica em geral </li>
                <li>Serviço de qualidade e com segurança</li>
                <li>Experiencia de mais de 5 anos na area</li>
                <li>Satisfação garantida ou seu dinheiro de volta</li>
              </ul>
      </div>
    
    </div>
    <div className='py-20 bg-black xl:flex xl:justify-center ' >
      
      <div className=' mt-5 duration-300 shadow-[#F1C40F]  
      shadow-lg p-5 rounded-3xl ml-auto mr-auto xl:mr-0 xl:ml-0
      gradbg group w-[380px] lg:w-[420px] h-[300px] pb-10 pr-5 ' >
              <h2 className='text-2xl font-bold text-yellow-300
              group-hover:text-black ' >
               Sobre Nós </h2>
              
              <p className='font-bold group-hover:text-black' >
              Na A.A.P, nosso compromisso é com a excelência e a 
              confiança. Com anos de experiência no mercado, 
              oferecemos soluções sob medida para as necessidades
               dos nossos clientes, sempre com foco em eficiência e 
               resultados. Nossa equipe especializada trabalha com
                dedicação e transparência, garantindo a qualidade 
                em cada detalhe. Escolher a A.A.P Serviços é optar 
                por segurança e profissionalismo.


              </p>
                    </div>
    
    </div>
    </div>    
    </div>
  )
}













































