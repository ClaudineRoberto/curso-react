"use client"

import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpForm } from "./types/SignUpForm";
import { Input } from "./components/Input";


const page = () => {

  const { 
    control,
    handleSubmit,
    setValue
  } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  }

    return (
        <div className="container mx-auto">
          
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <Input
              control={control}
              name="name"
              rules={{ required: true, minLength: 3, maxLength: 20}}
            />

            <Input
              control={control}
              name="lastName"
            />

            <Input
              control={control}
              name="age"
              rules={{ min: 18, max: 120, required: true}}
            />            


            <input 
            type="submit" 
            value="Enviar"
            className=" block border border-white py-2 px-3 mt-3 rounded-md cursor-pointer"
            />


          </form>

          <button onClick={() => setValue('age', 18)}>Sou maior de 18</button>
          

        </div>
    );
}

export default page;