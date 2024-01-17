"use client"

import { useRef, useState } from "react";


const page = () => {

  const [legendInput, setLegendInput] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSend = async () => {
    //verificando se existe o campo files dentro do campo input
    if(fileInputRef.current?.files && fileInputRef.current.files.length > 0){
      const fileItem = fileInputRef.current.files[0]
      //verificando se o arquivo é uma imagem
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']

      if (allowedTypes.includes(fileItem.type)){

        const data = new FormData();
        data.append('image', fileItem);
        data.append('legend', legendInput);

        const res = await fetch ('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        const json = await res.json();
        console.log(json);

      } else {
        alert('Tipo de arquivo não permitido');
      }

    } else {
      alert('Você precisa selecionar um arquivo');
    
    }
  }
  
    return (
        <div className="container mx-auto">
          <h1 className="text-3xl mt-4">Upload de Imagem</h1>
            
            <div className="flex flex-col gap-3 max-w-md border border-white p-3 mt-4">
              <input 
              type="file"
              ref={fileInputRef}
              />
              <input 
              type="text" 
              placeholder="Digite uma legenda"
              className="p-3 bg-white rounded-md text-black"
              value={legendInput}
              onChange={(event) => setLegendInput(event.target.value)}
              />
              <button 
              className="border-blue-900 bg-blue-700 w-28 px-3 py-2 rounded-md"
              onClick={handleFileSend}
              >Enviar</button>
            </div>
        </div>
    );
}

export default page;