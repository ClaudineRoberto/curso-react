"use client"

import { useState } from "react";
import { usePosts } from "./utils/queries";

const page = () => {
  
  const [canLoadPosts, setCanLoadPosts] = useState(false);

 const posts = usePosts(canLoadPosts);

 const handleLoadPostsButton = () => {
    setCanLoadPosts(true);
 }

    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>

          {!canLoadPosts&&
            <button 
            className="border border-white p-3 rounded-md m-3"
            onClick={handleLoadPostsButton}
            >Carregar Posts</button>
          }
          


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