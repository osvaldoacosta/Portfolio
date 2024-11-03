// components/ThemeSwitcher.tsx
"use client";

import { type ReactNode } from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeSwitcherProps {
  children: ReactNode;
}

export function ThemeSwitcher({ children }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}
