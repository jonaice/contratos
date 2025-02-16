import  InputString from "@/components/ui/inputString";

const FormLogin = () => {

    return (

        <div className="w-full max-w-md mt-5">
            <h2 className="text-2xl font-semibold"> Iniciar Sesión</h2>
            <p className="text-gray-500">Por favor, ingresa tu correo y contraseña para iniciar sesión.</p>

            <form className="w-full mt-5">
                <InputString type="email" placeholder="Email" className="mb-6" />
                <InputString type="text" placeholder="Contraseña" />
            </form>
        </div>

    );
}

export default FormLogin;