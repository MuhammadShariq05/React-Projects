import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const controller = new AbortController();
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (res.status === 200) return res.json();
        else return Promise.reject(res);
      })
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        if (e.name === "AbortError") return; // Ignore abort errors
        setIsError(true);
      })
      .finally(() => {
        if (controller.signal.aborted) return; // Ignore if already aborted
        setIsLoading(false);
      });

    return () => {
      controller.abort(); // Clean up function to abort fetch on unmount
    };
  }, [url]);

  return { isLoading, isError, data };
}
