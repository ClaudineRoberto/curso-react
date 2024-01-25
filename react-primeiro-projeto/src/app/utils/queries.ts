import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts } from "./api"

export const usePosts = (enabled?: boolean) => {
    const query = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        staleTime: Infinity,
        enabled: enabled,
    })
    return query;
}

export const usePost = (id: number) => {
    const query = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPost(id)
    })
}

    