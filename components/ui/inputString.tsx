import {FC} from 'react';
import { cn } from '@/libs/utils';

interface InputStringProps{
    type: 'text' | 'email' | 'password';
    placeholder: string;
    className?: string
}

const InputString: FC<InputStringProps> = ({type, placeholder, className}) =>{

    return (

        <div className="w-full">
            <input 
                type={type}
                className= {cn('w-full bg-gray-100 py-2 px-2 outline-none rounded-md', className)}
                placeholder= {placeholder}
            />
        </div>

    );
}

export default InputString;