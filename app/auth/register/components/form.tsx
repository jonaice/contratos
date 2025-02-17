import InputString from "@/components/ui/inputString";
import Button from "@/components/ui/button"; 

const FormRegister = () => {

    return (

        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-5 text-primary"> Crear Cuenta</h2>
            <p className="text-gray-500">Ingresa tus datos para registrarte y comenzar a usar DocsFlex de manera fácil y segura.</p>

            <form className="w-full mt-5">

                <InputString type="email" placeholder="Email" />
                <InputString type="password" placeholder="Contraseña" />
            </form>
            <div className="flex justify-end mb-5">
                <button type="button" className="text-blue-800 duration-300">¿Olvidaste tu contraseña?</button>
            </div>
            <Button type="submit" label="Ingresar"/>
            <div className="flex mt-10 justify-center">
                <p className="text-gray-500">¿No tienes una cuenta?</p>
                <button className="ml-1 font-bold text-primary hover:text-blue-800 transition-colors duration-300">Regístrate aquí</button>
            </div>
        </div>

    );
}

export default FormRegister;