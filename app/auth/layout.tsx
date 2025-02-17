"use client";

import { FC, ReactNode } from 'react';
import Image from "next/image";
import { usePathname } from "next/navigation";

interface AuthLayoutProps {
    children: React.ReactNode; // Esto permite que el componente envuelva otros elementos JSX.
}


const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    
  const pathname = usePathname(); // Obtiene la ruta actual

  const block={
    pathnameImg: pathname ==='/auth/login' ? '/AuthPages/img-contratos.svg' : pathname === '/auth/register' ? '/AuthPages/img-register.svg' : pathname === '/auth/forgot-password' ? '/AuthPages/img-forgot-password.svg' : '/AuthPages/img-error-404.svg',
    title: pathname ==='/auth/login' ? 'Crea Contratos a tu Medida' : pathname === '/auth/register' ? 'Regístrate y Comienza a Generar Contratos' : pathname === '/auth/forgot-password' ? 'Recupera el acceso fácilmente' : 'No hay título',
    descripcion: pathname ==='/auth/login' ? 'Genera contratos personalizados de forma rápida, segura y eficiente. Ahorra tiempo y adapta cada documento según tus necesidades con solo unos clics.' : pathname === '/auth/register' ? 'DocsFlex es la plataforma ideal para crear, personalizar y gestionar contratos de manera rápida y segura. Optimiza tu tiempo con documentos automatizados, personalizables.' : pathname === '/auth/forgot-password' ? 'Si necesitas recuperar el acceso a tu cuenta, estamos aquí para ayudarte. Ingresa tu correo y te enviaremos un enlace para que puedas crear una nueva contraseña de forma rápida y segura.' : 'No hay descripción',
  }
    

    
  return (

    <div className="min-h-screen grid grid-cols-12 lg:p-10 sm:p-5 bg-gray-300">
      <div className="bg-white rounded-xl col-span-12 md:col-span-12 grid grid-cols-12 p-2">
        
        <div className="col-span-12 lg:col-span-7 md:col-span-7 bg-whiteflex justify-center p-2">
          {children}
        </div>

        <section className="col-span-5 hidden md:flex flex-col items-center justify-center bg-primary rounded-xl p-8 ml-4">
          
          <div className="relative lg:w-96 lg:h-96 md:w-64 md:h-64">
            <Image src={block.pathnameImg} alt="Imagen Auth" fill priority={true} />
          </div>

          <div className="text-center mt-6 px-6"> 
            <h3 className="text-white text-xl font-bold mb-3">{block.title}</h3>
            <p className="text-white text-md">{block.descripcion}</p>
          </div>
        </section>

      </div>
    </div>
  );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default AuthLayout;
