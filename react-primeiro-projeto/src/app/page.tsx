"use client"

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'


const SignUpFormSchema = z.object({
  name: z.string().min(2, 'Mínimo de 2 letras').max(20, 'Máximo de 20 letras'),
  lastName: z.string().optional(),
  age: z.number({ invalid_type_error: 'Idade precisa ser um número' }).min(18, 'Idade mínima de 18 anos')
});


const page = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSignUpForm = () => {
    alert('Cadastrado com sucesso!');
  }

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(handleSignUpForm)}>

        <div>
          <input
            {...register('name')}
            className='border border-white text-black p-3 m-3'
          />
          {errors.name && <p>{ errors.name.message as string }</p>}
        </div>

        <div>
          <input
            {...register('lastName')}
            className='border border-white text-black p-3 m-3'
          />
          {errors.lastName && <p>{ errors.lastName.message as string }</p>}
        </div>

        <div>
          <input
            {...register('age', { valueAsNumber: true })}
            className='border border-white text-black p-3 m-3'
          />
          {errors.age && <p>{ errors.age.message as string }</p>}
        </div>


        <input type='submit' value='Cadastrar' />

      </form>

    </div>
  );
}

export default page;