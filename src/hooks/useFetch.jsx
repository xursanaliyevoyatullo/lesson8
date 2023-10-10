import { useState, useEffect } from "react"

export function useFetch(url, method="GET") {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    const [postData, setPostData] = useState(null)

    const newData = (newRecipe) => {
        setPostData({
            method: "POST",
            headers: {
                "Contnet-Type": "application/json",
            },
            body: JSON.stringify(newRecipe)
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
                setIsPending(false);
                setData(data);
                setError(null);
            } catch (error) { 
                setIsPending(false);
                setData(data);
                setError(error.message)
            }
        };

        if (method == "POST" && postData) {
           getData(postData)
        }

        if (method == "GET") { 
            getData()
        }
    }, [url, method, postData]);
    return { data, isPending, error, newData }
}