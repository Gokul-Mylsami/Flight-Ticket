import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { fetchData, data, loading, error };
};

export default useFetch;
