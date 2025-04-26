"use client";

import { ThemeProvider } from "../context/ThemeContext";
import { useApod } from "../hooks/useApod";
import ThemeToggle from "../components/ThemeToggle";
import ImageDisplayer from "../components/ImageDisplayer";
import Button from "../components/Button";
import DatePicker from "../components/DatePicker";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Link from "next/link";
import { useFavorites } from "../context/FavoritesContext";

export default function Home() {
  const { apod, loading, error, fetchApod } = useApod();
  const { addFavorite } = useFavorites();
  return (
    <ThemeProvider>
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <ThemeToggle />
        <div style={{ marginBottom: "1.5rem" }}>
          <h1>NASA APOD 🔭</h1>
          <h2>Explore the wonders of the universe</h2>
          <Link href="/favorites">Favorites</Link>
        </div>

        {/* Today's APOD */}
        <div style={{ marginBottom: "1.5rem" }}>
          <Button onClick={() => fetchApod()} loading={loading} />
        </div>

        {/* Specific Date APOD */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Or choose a specific date:</p>
          <DatePicker 
            onSelectDate={(date) => fetchApod(date)} 
            loading={loading} 
          />
        </div>
        {loading && <Loader />}
        {error && <Error message={error} />}
        {apod && (
          <>
            <ImageDisplayer apod={apod} />
            <button onClick={() => addFavorite(apod)}>⭐ Add to Favorites</button>
          </>
        )}
      </main>
    </ThemeProvider>
  );
}