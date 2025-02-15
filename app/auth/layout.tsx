import { FC, ReactNode } from 'react';


interface AuthLayoutProps {
    children: React.ReactNode; // Esto permite que el componente envuelva otros elementos JSX.
}

// Declaramos un componente funcional llamado AuthLayout.
// Usamos FC<AuthLayoutProps> para asegurarnos de que el componente recibe correctamente las props tipadas.
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (

        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex items-center justify-center bg-blue-100">
            <h1 className="text-3xl font-bold text-blue-600">Zona Izquierda</h1>
          </div>
    
          <div className="flex items-center justify-center bg-white p-6">
            {children}
          </div>
        </div>

      );

};

// Exportamos el componente para que pueda ser utilizado en otros archivos.
export default AuthLayout;
