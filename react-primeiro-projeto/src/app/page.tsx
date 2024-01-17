"use client"

import axios from "axios";

const page = () => {

  const handleAddPosts = async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'Novo Post',
      body: 'Corpo do Post',
      userId: 1
    })

    console.log(response.data)
  }

  return (
        <div className="container mx-auto">
          <button onClick={handleAddPosts}>Inserir Post</button>
        </div>
    );
}

export default page;