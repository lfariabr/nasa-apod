"use client";

import { useState } from "react";
import { useApod } from "../hooks/useApod";
import APODViewer from "../components/APODViewer";
import APODButton from "../components/APODButton";
import APODDatePicker from "../components/APODDatePicker";
import APODLoader from "../components/APODLoader";
import APODError from "../components/APODError";

export default function Home() {
  const { apod, loading, error, fetchApod } = useApod();
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>NASA APOD 🔭</h1>
      <h2>Explore the wonders of the universe</h2>
      {/* Today's APOD */}
      <div style={{margin: "1.5rem 0"}}>
        <APODButton onClick={() => fetchApod()} loading={loading} />
      </div>

      {/* Specific Date APOD */}
      <div style={{ margin: "1.5rem 0" }}>
        <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Or choose a specific date:</p>
        <APODDatePicker 
          onSelectDate={(date) => fetchApod(date)} 
          loading={loading} 
        />
      </div>
      {loading && <APODLoader />}
      {error && <APODError message={error} />}
      {apod && <APODViewer apod={apod} />}
    </main>
  );
}