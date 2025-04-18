import {useState} from "react";

export type APOD = {
  title: string;
  date: string;
  explanation: string;
  url: string;
  media_type: string;
}

export function useApod() {
  const [apod, setApod] = useState<APOD | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchApod = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8000/apod");
      const data = await response.json();
      setApod(data);
    } catch (error) {
      console.error("Error fetching APOD:", error);
      setError("Failed to fetch APOD");
    } finally {
      setLoading(false);
    }
  };

  return { apod, loading, error, fetchApod };
}