import LogoLite from "@/components/shared/logolite";
import FormForgot from "./components/form";

export default function ForgotPass()
{
    return(

        <section className="h-full flex flex-col items-center justify-center">

            <div className=" flex pb-12 -mt-10">
                <LogoLite />
            </div>
            
            <FormForgot />
            
        </section>


    )
}