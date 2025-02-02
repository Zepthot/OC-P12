import { useState, useEffect } from 'react';

export function useFetch<T>(
  fetchFunction: (id: number) => Promise<T>,
  id: number
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchFunction(id)
      .then((response) => setData(response))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [fetchFunction, id]);

  return { data, loading, error };
}
