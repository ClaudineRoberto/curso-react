"use client"

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string,
  lastName: string,
};

const page = () => {
  const { handleSubmit, register } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

    return (
        <div className="container mx-auto">
          
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <input 
            {...register("name")} 
            className="border border-white p-3 mt-3 text-black"
            placeholder="Digite seu nome"
            />

            <input 
            {...register("lastName")} 
            className="block border border-white p-3 mt-3 text-black"
            placeholder="Digite seu sobrenome"
            />

            <input 
            type="submit" 
            value="Enviar"
            className="border border-white py-2 px-3 mt-3 rounded-md cursor-pointer"
            />


          </form>

        </div>
    );
}

export default page;