import { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";

export const Header = () => {

    const postCtx = useContext(PostContext);
    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('');

    const handleAddPost = () => {
        postCtx?.addPost(titleInput, bodyInput);
        setTitleInput('');
        setBodyInput('');
    };

    return(
        <header>
            <h1 className="text-4xl font-bold">Meu Blog</h1>

            <div className="max-w-2xl border border-gray-400 p-3 flex flex-col gap-3 my-5">

                <input type="text" 
                placeholder="Digite um título" 
                className="border border-gray-300 p-2 text-black text-xl"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                />

                <textarea 
                placeholder="Digite um texto" 
                className="h-36 border border-gray-300 p-2 text-black text-xl"
                value={bodyInput}
                onChange={(e) => setBodyInput(e.target.value)}
                ></textarea>

                <button onClick={ handleAddPost } className=" bg-blue-500 p-3 text-white rounded-md">Adicionar Post</button>

            </div>
        </header>
    );
};