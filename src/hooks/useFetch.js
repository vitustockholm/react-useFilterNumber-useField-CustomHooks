import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  //Hooks
  // ---state
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  // // --- side effects
  useEffect(() => {
    //fetching data
    axios
      .get(endpoint)
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.err);
        setIsLoading(false);
      });
  }, [endpoint]);
  return { data, isLoading, error };
  //
};
export default useFetch;
