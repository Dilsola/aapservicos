import Logo from '../../../public/LogoAAP.png'
import  Image from 'next/image'

 export function FooterSection(){
  return(
    <section className='bg-black pt-10 flex justify-center items-center ' >
        <div className="container flex flex-col justify-center items-center py-5 mt-5
         bg-slate-400/20 ">
          
          <Image src={Logo} alt='logo'
          width={70} height={70}
          className=""
          />
          <h3 className="text-[#f1c40f]" >@Todos os direitos reservados</h3>
          <p className="text-[#f1c40f]">A.A.P-servicos</p>

        </div>
    </section>
  )
 }