import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { Post } from "../types/Post";
import { postReducer } from "../reducers/postReducers";

const STORAGE_KEY = 'postContextContent';

type PostContextType = {
    posts: Post[];
    addPost: (title: string, body: string) => void;
    removePost: (id: number) => void;

};

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({children}: {children: ReactNode}) => {

    const [posts, dispatch] = useReducer(postReducer, JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') );

    const addPost = (title: string, body: string ) => {
        if(title.trim() !== '' && body.trim() !== ''){
            dispatch({
                type: 'add',
                payload: {title, body}
            
            })
        }
    }
    const removePost = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {id}
        })
    }

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    }, [posts]);

    return(
        <PostContext.Provider value={{posts, addPost, removePost}}>
            {children}
        </PostContext.Provider>
    );

}