"use client";
import { ReactNode, createContext, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  changeTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  changeTheme: () => {},
});

export default function ThemeProvider({
  children,
  theme,
  changeTheme,
}: Readonly<{
  children: ReactNode;
  theme: "light" | "dark";
  changeTheme: () => void;
}>) {
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}
