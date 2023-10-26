import axios from "axios";
import { useEffect, useState } from "react";

export default function useAxios(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await axios(url);
      setData(data);
      console.log(data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return { isLoading, error, data };
}
