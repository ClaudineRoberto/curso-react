"use client"

import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string,
  lastName: string,
  age: number,
};

const page = () => {

  const { 
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>();

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

    return (
        <div className="container mx-auto">
          
          <form onSubmit={handleSubmit(handleFormSubmit)}>

            <input 
              {...register("name", { required: true, minLength: 3, maxLength: 20})} 
              className={`border ${errors.name ? 'border-red-500 border-2 focus:outline-red-500' : 'border-white'} p-3 mt-3 text-black`}
              placeholder="Digite seu nome"
            />

            <input 
            {...register("lastName")} 
            className="block border border-white p-3 mt-3 text-black"
            placeholder="Digite seu sobrenome"
            />

            <input 
            {...register("age", { min: 18, max: 120, required: true})} 
            type="number"
            className={`border ${errors.age ? 'border-red-500 border-2 focus:outline-red-500' : 'border-white'} p-3 mt-3 text-black`}
            placeholder="Digite sua idade"
            />

            <input 
            type="submit" 
            value="Enviar"
            className=" block border border-white py-2 px-3 mt-3 rounded-md cursor-pointer"
            />


          </form>

        </div>
    );
}

export default page;