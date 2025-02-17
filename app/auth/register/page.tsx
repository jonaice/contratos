import LogoLite from "@/components/shared/logolite";
import FormRegister from "./components/form";

export default function Login()
{
    return(

        <section className="h-full flex flex-col items-center justify-center">

            <div className=" flex pb-12">
                <LogoLite />
            </div>
            <FormRegister />
            
        </section>


    )
}