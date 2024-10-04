

'use client'
import avatar1 from "../../../public/avatar-1.png";
import avatar2 from "../../../public/avatar-2.png";
import avatar3 from "../../../public/avatar-3.png";
import avatar4 from "../../../public/avatar-4.png";
import avatar5 from "../../../public/avatar-5.png";
import avatar6 from "../../../public/avatar-6.png";
import avatar7 from "../../../public/avatar-7.png";
import avatar8 from "../../../public/avatar-8.png";
import avatar9 from "../../../public/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from 'react'

const testimonials = [
  {
    text: "serviço excelente estava com problemas na parte eletrica devido um painel eletrico antigo o profissional trocou para um painel moderno, ele me explicou o que ia fazer trocou tudo dentro dos procedimentos de segurança resolveu meu problema ótimo profissional nota 10 ",
    imageSrc: avatar1.src,
    name: "Ana maria",
    username: "@anamariadasgraças",
  },
  {
    text: "tive problema na casa que mudei, ela estava com o encanamento furado e a dona pra variar so mandava um gambiarreiro que nao resolvia o problema entao liguei para a AAP-serviços, coisa de minutos o profissional ja estava aqui veio com os equipamentos corretos para o conserto e conseguiu consertar no mesmo dia, nao deixou bagunça no quintal, educado e um profissional que sabe o que esta fazendo, concerteza irei chamar de novo",
    imageSrc: avatar2.src,
    name: "Antonio carlos",
    username: "@antoniocarlos",
  },
  {
    text: "A um tempo pedi para um profissional de ar condicionado instalar eles aqui em minha loja o cara fez um serviço porem coisa de uma semana, todos os ares que ele instalou estavam com defeito nao gelavam entao e ele vivia me enrolando um mes e nada então consegui o numero da AAP-serviços com um amigoe liguei o cara me atendeu na mesma hora e por sorte pude fechar com ele  que veio no mesmo dia ao chegar o profissional viu que os equipamentos tinham sido instalados de forma errada no mesmo dia ja começou a arrumar terminando a semana tinha arrumado todos os ares por um preço bem melhor do que o  do concorrente entao ja fechei um contrato de 1 ano com eles ",
    imageSrc: avatar7.src,
    name: "Jose Ricardo",
    username: "@josericardosilva",
  },
  {
    text: "serviço excelente estava com problemas na parte eletrica devido um painel eletrico antigo o profissional trocou para um painel moderno, ele me explicou o que ia fazer trocou tudo dentro dos procedimentos de segurança resolveu meu problema ótimo profissional nota 10 ",
    imageSrc: avatar1.src,
    name: "Ana maria",
    username: "@anamariadasgraças",
  },
  {
    text: "tive problema na casa que mudei, ela estava com o encanamento furado e a dona pra variar so mandava um gambiarreiro que nao resolvia o problema entao liguei para a AAP-serviços, coisa de minutos o profissional ja estava aqui veio com os equipamentos corretos para o conserto e conseguiu consertar no mesmo dia, nao deixou bagunça no quintal, educado e um profissional que sabe o que esta fazendo, concerteza irei chamar de novo",
    imageSrc: avatar2.src,
    name: "Antonio carlos",
    username: "@antoniocarlos",
  },
  {
    text: "A um tempo pedi para um profissional de ar condicionado instalar eles aqui em minha loja o cara fez um serviço porem coisa de uma semana, todos os ares que ele instalou estavam com defeito nao gelavam entao e ele vivia me enrolando um mes e nada então consegui o numero da AAP-serviços com um amigoe liguei o cara me atendeu na mesma hora e por sorte pude fechar com ele  que veio no mesmo dia ao chegar o profissional viu que os equipamentos tinham sido instalados de forma errada no mesmo dia ja começou a arrumar terminando a semana tinha arrumado todos os ares por um preço bem melhor do que o  do concorrente entao ja fechei um contrato de 1 ano com eles ",
    imageSrc: avatar7.src,
    name: "Jose Ricardo",
    username: "@josericardosilva",
  },
  {
    text: "serviço excelente estava com problemas na parte eletrica devido um painel eletrico antigo o profissional trocou para um painel moderno, ele me explicou o que ia fazer trocou tudo dentro dos procedimentos de segurança resolveu meu problema ótimo profissional nota 10 ",
    imageSrc: avatar1.src,
    name: "Ana maria",
    username: "@anamariadasgraças",
  },
  {
    text: "tive problema na casa que mudei, ela estava com o encanamento furado e a dona pra variar so mandava um gambiarreiro que nao resolvia o problema entao liguei para a AAP-serviços, coisa de minutos o profissional ja estava aqui veio com os equipamentos corretos para o conserto e conseguiu consertar no mesmo dia, nao deixou bagunça no quintal, educado e um profissional que sabe o que esta fazendo, concerteza irei chamar de novo",
    imageSrc: avatar2.src,
    name: "Antonio carlos",
    username: "@antoniocarlos",
  },
  


];
//dfdfdfdf
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { 
  className?: string; 
  testmonials: typeof testimonials;
  duration: number
}) =>(
  <div  className={props.className} >
  <motion.div className="flex flex-col gap-6 pb-6" 
        animate={{
          translateY: '-50%'
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: 'loop',
          ease: "linear"
        }}
  >

    {[... new Array(2)].fill(0).map((_, index)=>(
      <React.Fragment key={index} >
             {props.testmonials.map(( { text, imageSrc, name, username } )=>(
        
        <div key={name} className="card bg-black text-white"  >
            <div>{text}</div>
            <div className="flex items-center gap-2 mt-5" >
              <Image src={imageSrc} alt="image"
              width={40}
              height={40} 
              className=" rounded-full" />
            </div>
            
            <div className="flex flex-col text-white " >
              <div className="font-medium tracking-tight leading-5" >
                {name}</div>
              <div className="leading-5 tracking-tight" >
                {username}</div>
            </div>
        
        </div>
    ))}
      </React.Fragment>
))}
    
  </motion.div>
  </div>
)


export const Testimonials = () => {
  return (
    <section className="bg-black " >
      <div className="container" >
        
        <div className="section-heading" >
        <div className="flex justify-center" >
          <div >
           <h2 className="text-5xl font-bold text-white text-center p-5 w-screen bg-[#F1C40F]" > Depoimentos de clientes</h2></div>
        </div>
        
              </div>    
        
        <div className="flex justify-center mt-10 gap-6 
        max-h-[738px] overflow-hidden
         [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] " >
          <TestimonialsColumn testmonials={firstColumn} duration={90} />       
          
          <TestimonialsColumn testmonials={secondColumn} duration={19}
          className="hidden md:flex" />       
          
          <TestimonialsColumn testmonials={thirdColumn} duration={17}
          className="hidden lg:block"
          />       
        </div>
      </div>
    </section>  
  );
};
