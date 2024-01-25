"use client"

import { useState } from "react";
import { usePosts } from "./utils/queries";

const page = () => {

  const limit = 3;
  const [page, setPage] = useState(0);
  
 const posts = usePosts();

 const handleNextButton = () => {
  setPage(page + 1)
 }

 const handlePrevButton = () => {
  setPage(page === 0 ? 0 : page - 1)
 }


    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>

          <div className="border border-white p-3 my-3">
            <div>Itens por página {limit}</div>
            <div>Número da página {page} </div>
            <button onClick={handlePrevButton} className="border px-2 mr-2">Página anterior</button>
            <button onClick={handleNextButton} className="border px-2">Próxima página</button>
          </div>
          

          {posts.isLoading && <p className="text-white">Carregando...</p>}
          {!posts.isLoading && posts.isFetching && <p className="text-white">Está recarregando...</p>}

          {posts.data &&
            <ul>
              {posts.data.map(item => (
                <li key={item.id} className="text-white">{item.title}</li>
              ))}
            </ul>
          }
        </div>
    );
}

export default page;