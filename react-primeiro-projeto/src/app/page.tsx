"use client"

import { invalidadePosts, usePosts, useUserPrefetch } from "./utils/queries";

const page = () => {
 
 const posts = usePosts();

 const handleInsertNewPostButton = () => {

  invalidadePosts();

 }


    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>

          <div className="p-3 border border-white my-3">
            <p>Área de inserção de novo post</p>
            <button onClick={handleInsertNewPostButton} className="border border-white p-2 mt-3 rounded-md">Inserir novo post</button>
          </div>

          {posts.isLoading && <p className="text-white">Carregando...</p>}

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