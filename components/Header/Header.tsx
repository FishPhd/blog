"use client";
import React, { Dispatch, SetStateAction, useContext } from "react";
import clsx from "clsx";
import { Rss, Sun, Moon } from "react-feather";

import Logo from "@/components/Logo";

import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { cn } from "@/utils/tailwind";
import ThemeProvider, { ThemeContext } from "../Providers/ThemeProvider";

export function Header({
  className,
  ...delegated
}: {
  className?: string;
  [key: string]: any;
}) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header
      className={cn(
        "relative flex justify-between items-center max-w-screen-xl p-10 mx-auto",
        className
      )}
      {...delegated}
    >
      <Logo />

      <div className="space-x-8">
        <button className="hover:text-white">
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: "translate(2px, -2px)",
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="hover:text-white"
        >
          {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
