import { FC, ReactNode } from 'react';
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode; // Esto permite que el componente envuelva otros elementos JSX.
}

// Declaramos un componente funcional llamado AuthLayout.
// Usamos FC<AuthLayoutProps> para asegurarnos de que el componente recibe correctamente las props tipadas.
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (

        <div className="min-h-screen grid grid-cols-12 lg:p-10 sm:p-5 bg-gray-100">
          <div className="bg-white rounded-xl col-span-12 md:col-span-12 grid grid-cols-12 p-2">
            
            <div className="col-span-12 lg:col-span-7 md:col-span-7 bg-whiteflex justify-center p-2">
              {children}
            </div>

            <section className="col-span-5 hidden md:flex flex-col items-center justify-center bg-primary rounded-xl p-8 ml-4">
              
              <div className="relative lg:w-96 lg:h-96 md:w-64 md:h-64">
                <Image src="/AuthPages/img-contratos.svg" alt="Img Contrato" fill priority={true} />
              </div>

              <div className="text-center mt-6 px-6"> 
                <h3 className="text-white text-xl font-bold mb-3">Crea Contratos a tu Medida</h3>
                <p className="text-white text-md">Genera contratos personalizados de forma rápida, segura y eficiente. Ahorra tiempo y adapta cada documento según tus necesidades con solo unos clics.</p>
              </div>
            </section>

          </div>
        </div>

      );
};

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default AuthLayout;
