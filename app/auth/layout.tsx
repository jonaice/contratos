import { FC, ReactNode } from 'react';
import Image from "next/image";

interface AuthLayoutProps {
    children: React.ReactNode; // Esto permite que el componente envuelva otros elementos JSX.
}

// Declaramos un componente funcional llamado AuthLayout.
// Usamos FC<AuthLayoutProps> para asegurarnos de que el componente recibe correctamente las props tipadas.
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (

        <div className="min-h-screen grid grid-cols-12 p-10 bg-gray-100">
          <div className="bg-white rounded-xl col-span-12 lg:col-span-12 grid grid-cols-12 gap-10 p-2">
            
            <div className="col-span-7 flex items-center justify-center bg-white">
              {children}
            </div>

            <section className="col-span-5 hidden lg:flex flex-col items-center justify-center bg-primary rounded-xl p-8">
              
              <div className="relative w-96 h-96">
                <Image src="/AuthPages/img-contratos.svg" alt="Img Contrato" fill />
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
