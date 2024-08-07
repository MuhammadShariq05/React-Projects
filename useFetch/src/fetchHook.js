import { useState } from "react";

export function useFetch() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  return { isLoading, isError, data };
}
