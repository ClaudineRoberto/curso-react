"use client"

import { usePosts } from "./utils/queries";
import { useAddPost } from "./utils/mutations";

const page = () => {
 
  const posts = usePosts();

  const addPost = useAddPost();

  const handleAddButton = async () => {
    const data = {
      title: "Teste",
      body: "Corpo de Teste",
      userId: 1
    };

    addPost.mutate(data);
 }

    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>

          <div className="border border-white p-3 my-3">
            <p>Adicionar Novo Post</p>

            <p onClick={() => addPost.reset()}>Status: {addPost.status}</p>

            <button onClick={handleAddButton} className="border border-white rounded-md px-3 py-2 mt-3">Adicionar</button>
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