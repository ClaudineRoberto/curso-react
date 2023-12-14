"use client"

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";



const Page = () => {


  return (
    <div className="container mx-auto">

      <PostProvider>

        <Header />
        <PostList />
        <Footer />
        
      </PostProvider>

    </div>
  );
};

export default Page;