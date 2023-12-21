'use client'

import {usePostService} from "@/services/usePostService";

export default function Home() {

    const { data , isLoading , isSuccess } = usePostService();

    return (
        <>
            {isLoading ? <div>Yukleniyor</div> : <pre>{JSON.stringify(data)}</pre>}
        </>
    )
}
