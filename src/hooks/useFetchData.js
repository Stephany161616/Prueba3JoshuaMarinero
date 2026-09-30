import { useCallback, useEffect, useState } from 'react';

export default function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (isRefresh = false) => {
      try {
        if (isRefresh) {
          setRefreshing(true);
        } else {
          setLoading(true);
        }
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`El servidor respondió con el código ${response.status}`);
        }

        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err.message || 'No se pudo cargar la información');
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [url]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => fetchData(false), [fetchData]);
  const refresh = useCallback(() => fetchData(true), [fetchData]);

  return { data, loading, refreshing, error, retry, refresh };
}
