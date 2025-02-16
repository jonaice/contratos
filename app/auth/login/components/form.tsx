import InputString from "@/components/ui/inputString";
import Button from "@/components/ui/button"; 

const FormLogin = () => {

    return (

        <div className="w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-5"> Iniciar Sesión</h2>
            <p className="text-gray-500">Por favor, ingresa tu correo y contraseña para iniciar sesión.</p>

            <form className="w-full mt-5">

                <InputString type="email" placeholder="Email" />
                <InputString type="password" placeholder="Contraseña" />
            </form>
            <div className="flex justify-end mb-7">
                <button type="button" className="text-gray-500">¿Olvidaste tu contraseña?</button>
            </div>
            <Button type="submit" label="Ingresar"/>
        </div>

    );
}

export default FormLogin;