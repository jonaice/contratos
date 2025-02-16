import LogoLite from "@/components/shared/logolite";
import FormLogin from "./components/form";

export default function Login()
{
    return(

        <section className="h-full flex flex-col items-center justify-center">

            <div className="mb-5">
                <LogoLite />
            </div>
            <FormLogin />
            
        </section>


    )
}