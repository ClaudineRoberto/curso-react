import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const PostList = () => {

    const PostCtx = useContext(PostContext);

    return(
        <div>
            {
                PostCtx?.posts.map((post) => (
                    <div key={post.id} className="border border-gray-400 p-4 mb-4">
                        <div className="font-bold mb-2 text-xl">{post.title}</div>
                        <div className=" text-sm">{post.body}</div>
                        <button onClick={() => PostCtx?.removePost(post.id)} className="bg-red-500 text-white p-2 rounded-md mt-2">Remover</button>
                    </div>
                ))
            }
        </div>
    );
}