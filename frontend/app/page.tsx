"use client";

import { useApod } from "../hooks/useApod";
import APODViewer from "../components/APODViewer";
import APODButton from "../components/APODButton";
import APODError from "../components/APODError";
import APODLoader from "../components/APODLoader";

export default function Home() {
  const { apod, loading, error, fetchApod } = useApod();
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>NASA Astronomy Picture of the Day 🌌</h1>
      <br></br>
      <div>
        <APODButton onClick={fetchApod} loading={loading} />
      </div>
      <br></br>
      {loading && <APODLoader />}
      {error && <APODError message={error} />}
      {apod && <APODViewer apod={apod} />}
    </main>
  );
}