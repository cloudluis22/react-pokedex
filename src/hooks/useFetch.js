import { useState, useEffect } from "react";

// We use this hook to fetch data from our APIs.
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
              const response = await fetch(url);
              if (!response.ok) {
                throw new Error('Something Failed');
              }
              const jsonData = await response.json();
              setData(jsonData);
            } catch (error) {
              setError(error);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }, [url])

    return {data, loading, error, setData}
    
}

export default useFetch;