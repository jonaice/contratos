import Image from "next/image";
import DocsFlexLogo from "@/components/shared/logofull";
import LogoLite from "@/components/shared/logolite";
import IconFull from "@/components/shared/iconFull";
import IconLite from "@/components/shared/iconLite";

export default function Login()
{
    return(

        <div className="flex flex-col">
            <div className="relative w-full h-full flex">
                <DocsFlexLogo />
            </div>
            <div className="relative w-full h-full flex">
                <LogoLite />
            </div>

            <div className="relative w-full h-full flex"> 
                <IconFull />
            </div>
            <div className="relative w-full h-full flex"> 
                <IconLite />
            </div>
        </div>

    )
}