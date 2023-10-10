import { useState, useEffect } from "react"

export function useFetch(url, method='GET') {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, sertError] = useState(null);
    const [postData, setPostData] = useState(null)

    const newData = (newRecipie) => {
        setPostData({
            method: "POST",
            headers: {
                "Contnet-Type": "application/json",
            },
            body: JSON.stringify(newRecipie)
        })
    }

    useEffect(() => {
        const getData = async (fetchConfig) => {
            setIsPending(true);
            try {
                const req = await fetch(url, {...fetchConfig});
                if (!req.ok) {
                    throw new Error(req.statusText);
                }
                const data = await req.json();
                setData(data);
                setIsPending(false);
                sertError(null);
            } catch (error) {
                setIsPending(false)
                sertError(err.message)
            }
        };

        if (method == "POST" && postData) {
           getData(postData)
        }

        if (method == "GET") {
            getData()
        }

    }, [url, method, postData])

    return { data, isPending, error, newData }
}