import { useQuery } from "@tanstack/react-query"
import { getPost, getPosts, getUsers } from "./api"
import { queryClient } from "./querycClient";

export const usePosts = () => {
    const query = useQuery({
        queryKey: ['posts',],
        queryFn: getPosts,
        staleTime: Infinity,
    })
    return query;
}

export const usePost = (id: number) => {
    const query = useQuery({
        queryKey: ['posts', id],
        queryFn: () => getPost(id)
    })
}

export const useUsers = () => {
    const query = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,
        staleTime: Infinity,
    })
    return query;
}

export const useUserPrefetch = async () => {
    await queryClient.prefetchQuery({
        queryKey: ['users'],
        queryFn: getUsers,
    });
}

export const invalidadePosts = () => {
    queryClient.invalidateQueries({
        queryKey: ['posts']
    });
}