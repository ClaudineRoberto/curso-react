"use client"

import { useState } from "react";
import { Person } from "./types/Person";


const Page = () => {

  const [fullName, setFullName] = useState<Person>({name: '', lastName: ''});
  const handleClick = () => {
    setFullName({name: '', lastName: ''});
  }

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">

      <input 
      type="text"
      placeholder="Nome"
      className="border border-black text-2xl text-black rounded-md mb-3 p-3"
      value={fullName.name}
      onChange = {(e) => setFullName({...fullName, name: e.target.value})}
      />
      <input 
      type="text"
      placeholder="Nome"
      className="border border-black text-2xl text-black rounded-md mb-3 p-3"
      value={fullName.lastName}
      onChange={(e) => setFullName({...fullName, lastName: e.target.value})}
      />

      <p>Meu nome completo é</p>
      <p>{fullName.name} {fullName.lastName}</p>
      <button className="p-3 bg-blue-700 rounded text-xl mt-4" onClick={handleClick}>Limpar tudo</button>

    </div>
  );
};

export default Page;

