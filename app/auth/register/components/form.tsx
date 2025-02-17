import InputString from "@/components/ui/inputString";
import Button from "@/components/ui/button"; 

const FormRegister = () => {

    return (

        <div className="w-full max-w-3xl">
            <h2 className="text-2xl font-semibold mb-5 text-primary"> Crear Cuenta</h2>
            <p className="text-gray-500">Ingresa tus datos para registrarte y comenzar a usar DocsFlex de manera fácil y segura.</p>

            <form className="w-full mt-5 grid lg:grid-cols-2 gap-4 md:grid-cols-1">

                <InputString type="text" placeholder="Nombres" />
                <InputString type="text" placeholder="Apellido Paterno" />
                <InputString type="text" placeholder="Apellido Materno" />
                <InputString type="text" placeholder="Número de teléfono" />
                <InputString type="email" placeholder="Email" />
                <InputString type="password" placeholder="Contraseña" />
                <InputString type="password" placeholder="Confirmar Contraseña" />
            </form>
            <div className="w-full grid  grid-cols-2 mt-4">
                <div className="col-start-2">
                    <Button type="submit" label="Registrarse"/>
                </div>
            </div>
            <div className="flex mt-6 justify-center">
                <p className="text-gray-500">¿Ya tienes una cuenta?</p>
                <button className="ml-1 font-bold text-primary hover:text-blue-800 transition-colors duration-300">Inicia sesión aquí</button>
            </div>
        </div>

    );
}

export default FormRegister;