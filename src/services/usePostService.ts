import axios from "axios";
import {useQuery} from "@tanstack/react-query";
import Post from "@/services/Post";


export const getPost = async (): Promise<Post> => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        return response.data
    } catch (e) {
        throw new Error('Error fetch');
    }
}

export const usePostService = () => {
    return useQuery<Post>({ queryKey: ['getPost'], queryFn: () => getPost() , enabled : true })
}