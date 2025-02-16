'use client';

import {FC, useState} from 'react';
import { cn } from '@/libs/utils';

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";

interface InputStringProps{
    type: 'text' | 'email' | 'password';
    placeholder: string;
    className?: string
}

const InputString: FC<InputStringProps> = ({type, placeholder, className}) =>{

    const [showPassword, setShowPassword] = useState(false);
    return (

        <div className="w-full relative mb-5">
            <input 
                type={type === 'text' ? 'text' : type === 'email' ? 'email' : showPassword ? 'text' : 'password' }
                className= {cn('w-full bg-gray-100 pl-4 pr-12 pt-2 pb-2 outline-none rounded-md', className)}
                placeholder= {placeholder}
            />

            
            { type === 'password' && (
                
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-4 top-1/2 -translate-y-1/2 text-primary'>
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                </button>

            )}
        </div>


    );
}

export default InputString;