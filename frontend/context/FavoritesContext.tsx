// frontend/context/FavoritesContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { APOD } from "../hooks/useApod"; // adjust import if you have a shared type

type FavoritesContextType = {
  favorites: APOD[];
  addFavorite: (item: APOD) => void;
  removeFavorite: (date: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<APOD[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // Persist on change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (item: APOD) => {
    // avoid dupes by date
    if (!favorites.find(f => f.date === item.date)) {
      setFavorites([item, ...favorites]);
    }
  };

  const removeFavorite = (date: string) => {
    setFavorites(favorites.filter(f => f.date !== date));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be inside FavoritesProvider");
  return ctx;
};