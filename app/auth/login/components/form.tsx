'use client';

import InputString from "@/components/ui/inputString";
import Button from "@/components/ui/button"; 
import { useRouter } from "next/navigation";

const FormLogin = () => {

    const router = useRouter();

    return (

        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-5 text-primary"> Iniciar Sesión</h2>
            <p className="text-gray-500">Por favor, ingresa tu correo y contraseña para iniciar sesión.</p>

            <form className="w-full mt-5">

                <InputString type="email" placeholder="Email" />
                <InputString type="password" placeholder="Contraseña" />
            </form>
            <div className="flex justify-end mb-5">
                <button type="button" className="text-blue-800 duration-300" onClick={() =>router.push("/auth/forgot-password")}>¿Olvidaste tu contraseña?</button>
            </div>
            <Button type="submit" label="Ingresar"/>
            <div className="flex mt-10 justify-center">
                <p className="text-gray-500">¿No tienes una cuenta?</p>
                <button className="ml-1 font-bold text-primary hover:text-blue-800 transition-colors duration-300" onClick={() => router.push("/auth/register")}>Regístrate aquí</button>
            </div>
        </div>

    );
}

export default FormLogin;