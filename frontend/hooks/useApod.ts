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

  const fetchApod = async (date?: string) => {
    setLoading(true);
    setError(null);
    try {
      // Building URL with date parameter
      const url = date
        ? `http://localhost:8000/apod?date=${date}`
        : "http://localhost:8000/apod";

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch APOD: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setApod(data);
    } catch (error: any) {
      console.error("Error fetching APOD:", error);
      setError(error.message || "Failed to fetch APOD");
    } finally {
      setLoading(false);
    }
  };

  return { apod, loading, error, fetchApod };
}