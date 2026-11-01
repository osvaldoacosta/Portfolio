// components/ThemeSwitcher.tsx
"use client";

import { type ReactNode } from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeSwitcherProps {
  children: ReactNode;
  className?: string;
}

export function ThemeSwitcher({ children, className }: ThemeSwitcherProps) {
  const { toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className={className} aria-label="Change Theme">
      {children}
    </button>
  );
}
