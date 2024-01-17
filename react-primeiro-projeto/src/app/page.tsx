"use client"
import axios from "axios";


const page = () => {

  const controler = new AbortController();

  const handleStartRequest = async () => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          signal: controler.signal
        });
    } catch(error){
      console.log('Deu algum problema...')
    }
  }

  const handleCancelRequest = () => {
    controler.abort();
  }

  return (
        <div className="container mx-auto flex gap-3 mt-4">
            <button onClick={handleStartRequest} className="border border-white rounded-md px-3 py-4">Fazer requisição</button>
            <button onClick={handleCancelRequest} className="border border-white rounded-md px-3 py-4">Cancelar requisição</button>
        </div>
    );
}

export default page;