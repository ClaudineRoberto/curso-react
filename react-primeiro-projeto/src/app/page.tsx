"use client"

import { Form, useForm } from "react-hook-form";

const page = () => {

  const handleSuceess = () => {
    console.log('Sucesso');
  }

  const handleError = () => {
    console.log('Erro');
  }


  const { register, control } = useForm();

    return (
        <div className="container mx-auto mt-6">
         
          <Form 
          control={control} 
          action={'https://jsonplaceholder.typicode.com/posts'}
          onSuccess={handleSuceess}
          onError={handleError}
          >

            <input {...register('title', {required: true})} className="border border-white p-3 mr-3 text-black" />
            <input {...register('body', {required: true})} className="border border-white p-3 mr-3 text-black" />
            <input {...register('userId', {required: true})} className="border border-white p-3 mr-3 text-black" />

            <button>Enviar</button>
          </Form>

        </div>
    );
}

export default page;