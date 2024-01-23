"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "./types/Post";

const page = () => {

  const query = useQuery({
    queryKey: ['posts'],
    queryFn: async (): Promise<Post[]> => {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return result.data;
    }
  });



    return (
        <div className="container mx-auto">
          <h1 className="text-white text-3xl">Lista de posts</h1>
          {query.isLoading && <p className="text-white">Carregando...</p>}

          {query.data &&
            <ul>
              {query.data.map(item => (
                <li key={item.id} className="text-white">{item.title}</li>
              ))}
            </ul>
          }
          

        </div>
    );
}

export default page;