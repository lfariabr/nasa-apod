import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>("light");

    // Helper: apply theme to <html> attribute
    const applyTheme = (theme: Theme) => {
        document.documentElement.setAttribute("data-theme", theme);
    };

    // Toggle between light and dark
    const toggleTheme = () => {
        const newTheme: Theme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }
    
    // Set theme and persist in localStorage
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // On mount, check localstorage, then system pref
    useEffect(() => {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored) {
            setTheme(stored);
        }
        else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    // Keep <html> attr in sync if theme changes!
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for easy access
export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useThemeContext must be used within a ThemeProvider");
    return ctx;
};