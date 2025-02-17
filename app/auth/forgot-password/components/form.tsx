'use client';

import InputString from "@/components/ui/inputString";
import Button from "@/components/ui/button"; 
import { useRouter } from "next/navigation";

const FormForgot = () => {

    const router = useRouter();

    return (

        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-5 text-primary"> Recuperación De Contraseña</h2>
            <p className="text-gray-500">Por favor, ingresa el correo de tu cuenta de DocsFlex.</p>

            <form className="w-full mt-8 mb-20">

                <InputString type="email" placeholder="Email" />
            </form>

            <Button type="submit" label="Enviar Link"/>

            <div className="flex mt-10 justify-center">
                <p className="text-gray-500">Para regresar</p>
                <button className="ml-1 font-bold text-primary hover:text-blue-800 transition-colors duration-300" onClick={()=> router.push("/auth/login")}>Clic aquí</button>
            </div>


        </div>

    );
}

export default FormForgot;