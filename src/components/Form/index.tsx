'use client'

import {useForm} from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Email } from './email'
import Image from 'next/image'

const schema = z.object({
        name: z.string().min(3, {message:"precisa ter mais de duas letras"}),
        email: z.string().email().min(1,{message:"email invalido verifico o campo"}),
        telNumber: z.string().max(11).min(11,{message:"numero invalido, nao esqueça de colocar o ddd tbm"}),
        descricao: z.string().min(1,{message:"digite o que voce precisa"}),
})

type UserInformation= z.infer<typeof schema>


export function Contact(){
  

  const { resetField, getValues, register, handleSubmit, formState: { errors } } =  
  useForm<UserInformation>({
    mode: "onChange",
    defaultValues: {
       descricao:"",
       email:"",
       name:"",
       telNumber:""
    },
    resolver:zodResolver(schema) 
  })
  
  function formSend(data:UserInformation){
   
    const values = getValues()
     Email(values)
     resetField("descricao")
     resetField("name")
     resetField("telNumber")
     resetField("email")
    }

  return(
    <section id='contact'>
    <h1 className=" w-full bg-yellow-500 py-8 opacity-50
     flex items-center justify-center 
      font-bold text-6xl " >Contato</h1>
    
    <div className=" flex justify-center 
    bg-transparent  w-screen" >
      
      <form action="" onSubmit= {handleSubmit(formSend)} className="flex flex-col gap-3 w-[60%]" >
          <input className=" p-4 h-14 mt-10 text-white bg-black border-gray-700 border-solid border-2 "  type="text" placeholder="nome" 
          {...register('name')}
          /> {errors.name?.message && <p className='text-rose-500'>{errors.name?.message}</p>}
          
          <div className=" block lg:flex 
          gap-4 justify-between w-full " >
          
          <div className='mb-3 lg:mb-0 w-full'>

          <input className="p-4 h-14 w-full text-white bg-black border-gray-700 border-solid border-2" type="email" placeholder="email" 
          {...register('email')}
          />
          {errors.email?.message && <p className='text-rose-500' >{errors.email?.message}</p>}
          </div>
          <div className='w-full' >

          <input className="p-4 h-14 w-full text-white bg-black border-gray-700 border-solid border-2 " type="tel" placeholder="numero do zap" 
          {...register('telNumber')}
          />
           {errors.telNumber?.message && <p className='text-rose-500' >{errors.telNumber?.message}</p>}
          </div>
         
          </div>
          
          <textarea  id=""  className=" h-32 border-gray-700 p-4 border-solid border-2  text-white bg-black " placeholder="Descreva o que voce precisa" 
          {...register('descricao')}
          >
          </textarea>
          {errors.descricao?.message && <p className='text-rose-500' >{errors?.descricao?.message}</p>}
         

        <button className=" duration-1000 mx-auto w-[50%] lg:w-[30%] 
        rounded-2xl bg-yellow-300 border-2 
        border-solid border-gray-700 hover:bg-[#F1C40F]  
        text-black p-3 font-extrabold text-md ">
          Enviar
        </button>
      </form>

    </div>
    {/* <Image src={Star} 
    className='absolute 
    top-[3100px] -z-20 lg:top-[1700px] 
    w-screen ' alt='' 
    /> */}
    
    </section>
  )
}