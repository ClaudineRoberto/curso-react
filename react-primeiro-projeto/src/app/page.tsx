"use client"

import axios from "axios";

const page = () => {

  const handleGetPosts = async () => {
    const requestParams = {
      postId: 1,
      sort: 'desc'
    }

    const response = await axios.get("https://jsonplaceholder.typicode.com/comments", {
      params: requestParams
    })

    console.log(response.data)

  }

  return (
        <div className="container mx-auto">
          <button onClick={handleGetPosts}>Pegar posts</button>
        </div>
    );
}

export default page;