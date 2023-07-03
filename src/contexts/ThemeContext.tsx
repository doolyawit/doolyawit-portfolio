'use client';
import React, { useState } from 'react';

interface ThemeContextProps {
  theme: boolean;
  toggleTheme: () => void;
}
export const ThemeContext = React.createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    localStorage.setItem('theme', theme ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
