import { UseControllerProps, useController } from "react-hook-form";
import { SignUpForm } from "../types/SignUpForm";

export const Input = (props: UseControllerProps<SignUpForm>) => {

    const {
        field,
        fieldState
    } = useController(props);

    return(
        <div className="my-3">
            <input 
            {...field}
            placeholder={props.name}
            className={`border ${fieldState.invalid ? 'border-red-700 border-2' : 'border-white'} p-3 text-black`}
            />
            {fieldState.error?.type === 'required' && <p className="text-red-500">Campo obrigatório</p>}
            {fieldState.error?.type === 'minLength' && <p className="text-red-500">Mínimo de 3 caracteres</p>}
            {fieldState.error?.type === 'min' && <p className="text-red-500">Mínimo de 18 anos</p>}
            {fieldState.error?.type === 'max' && <p className="text-red-500">Máximo de 120 anos</p>}
        </div>
    );
}