import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const Footer = () => {

    const PostCtx = useContext(PostContext);
    return(
        <footer>
            Total de POSTS: {PostCtx?.posts.length}
        </footer>
    );
}