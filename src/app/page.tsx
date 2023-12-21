'use client'

import {usePostService} from "@/services/usePostService";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function Home() {

    const { data , isLoading , isSuccess } = usePostService();

    return (
        <>
            {isLoading ? <div>Yukleniyor</div> : <pre>{JSON.stringify(data)}</pre>}
        </>
    )
}
