//import * as React from 'react';
import { Tailwind } from '@react-email/components';
import { ReactNode } from 'react';
//import {EmailTemplate} from '../../components/EmailTemplate'
import { Resend } from 'resend';



export interface PropsValues{
  
  name: string;
  email: string;
  telNumber: string;
  descricao: string;
  
}

export function EmailTemplate(value:PropsValues){
  //console.log(value.descricao)

  //"use server"

  return(
    <Tailwind>

    <div className='bg-cyan-300 p-9 rounded-lg'>
    <h1 className='text-xl text-rose-500 ' >
      Cliente precisa de uma serviço </h1>
    
    <p>nome:{value?.name}</p>
    <p>email: {value?.email}</p>
    <p>telefone: {value?.telNumber}</p>
    <p className='text-base text-rose-600' >serviço: {value?.descricao}</p>
  
  </div>
    </Tailwind>    
  
)
}
  
