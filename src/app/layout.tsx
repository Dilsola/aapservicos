

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aap-serviços",
  description: "instalação e manutenção de ar condicionado, serviço de eletricista e encanador",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //const dados = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    return (
    <html lang="en">
      <head>
      <title>A.A.P Serviços - Ar Condicionado, Elétrica e Encanador</title>
        <meta name="description" content="A.A.P Serviços oferece manutenção e instalação de ar condicionado, serviços elétricos e encanador. Profissionais qualificados para atender você!" />
        <meta name="keywords" content="ar condicionado, instalação de ar condicionado,
         manutenção de ar condicionado, serviços elétricos, eletricista, 
         encanador, manutenção hidráulica, reparos elétricos,
          serviços de ar condicionado, instalação de ar condicionado em Taubaté, 
          eletricista em Taubaté, encanador em Taubaté, 
          ar condicionado com vazamento, disjuntor desligando, 
          vazamento de água, pane elétrica, reparos hidráulicos, 
          conserto de ar condicionado, conserto elétrico, 
          conserto hidráulico, assistência técnica de ar condicionado,
           manutenção preventiva de ar condicionado, reparos emergenciais, 
           técnico de ar condicionado, técnico de eletricidade, 
           técnico de encanamento, A.A.P Serviços" />
        <meta name="author" content="A.A.P Serviços" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* <Script 
          strategy="beforeInteractive"        
          src={dados}
          /> */}
 </head>
      <body className=' mt-0 w-screen lg:h-[3500px]  h-[3800px] 
       bg-center bg-no-repeat bg-zinc-950 overflow-x-hidden'>
        {children}
        </body>
    </html>
  );
}
