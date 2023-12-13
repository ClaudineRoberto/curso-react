import { ReactNode, createContext, useState } from "react";
import { Post } from "../types/Post";

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;

};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children}: {children: ReactNode}) => {

    const [posts, setPosts] = useState<Post[]>([]);
    const addPost = (title: string, body: string ) => {
        if(title.trim() !== '' && body.trim() !== ''){
            const post = {
                id: posts.length + 1,
                title,
                body
            };
            setPosts([...posts, post]);
        }
    }
    const removePost = (id: number) => {
        setPosts(posts.filter((post) => post.id !== id));
    }

    return(
        <PostContext.Provider value={{posts, addPost, removePost}}>
            {children}
        </PostContext.Provider>
    );
}