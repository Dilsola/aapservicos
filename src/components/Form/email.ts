"use server"
//fdfd
import { Resend } from "resend";
import { EmailTemplate, PropsValues } from "../EmailTemplate";
import { env } from "node:process";

const resend = new Resend(process.env.NEXT_RESENDMAIL);

export async function Email(props:PropsValues){
   
    await resend.emails.send(
{
  from: 'onboarding@resend.dev',
  to: 'aapservicoscontato@gmail.com',
  subject: 'msg de possivel cliente',
  react:EmailTemplate(props)
  //html: '<h1>api key desconect</h1>',
},
)
}