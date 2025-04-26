// You're importing a component that needs `useState`. This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.
"use client"
import "../../styles/global.css";
import ThemeToggle from "../../components/ThemeToggle";
import { ThemeProvider } from "../../context/ThemeContext";
import Link from "next/link";
import { useFavorites } from "../../context/FavoritesContext";
import ImageDisplayer from "../../components/ImageDisplayer";

const FavoritesPage = () => {
  const { favorites, removeFavorite } = useFavorites();
  return (
    <ThemeProvider>
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <ThemeToggle />
        <h1 style={{ marginTop: "1.5rem" }}>Favorites</h1>
        <Link href="/">Home</Link>
      </div>
      { favorites.length
      ? favorites.map(f => (
        <div key={f.date}>
          <ImageDisplayer apod={f} />
          <button onClick={() => removeFavorite(f.date)}>Remove</button>
        </div>
      ))
      : <p>No favorites found</p>}
    </ThemeProvider>
  )
}

export default FavoritesPage
