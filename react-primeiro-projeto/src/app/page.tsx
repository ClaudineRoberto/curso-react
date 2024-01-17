"use client"

import axios from "axios";
import { api } from "./utils/api";

const page = () => {

  const handleAddPosts = async () => {

    const response = await api.post('/posts',{
      title: 'Novo Post',
      body: 'Corpo do Post',
      userId: 1
    });


    if(response.data.id){
      console.log('Post inserido com sucesso')
      
    }else {
      console.log('Erro ao inserir post')
    
    }
  }

  return (
        <div className="container mx-auto">
          <button onClick={handleAddPosts}>Inserir Post</button>
        </div>
    );
}

export default page;