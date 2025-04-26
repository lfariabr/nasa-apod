// frontend/app/Providers.tsx
"use client";

import { ReactNode } from "react";
import { FavoritesProvider } from "../context/FavoritesContext";
import { ThemeProvider }   from "../context/ThemeContext";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <FavoritesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </FavoritesProvider>
  );
}