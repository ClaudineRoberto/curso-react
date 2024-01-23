"use client"

import { usePosts } from "./utils/queries";

const page = () => {

 const posts = usePosts();

    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>
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