import * as React from "react";
import "./styles/index.css";

interface AmethystProviderProps {
  children: React.ReactNode;
  className?: string;
  theme?: "light" | "dark";
}

export function AmethystProvider({
  children,
  className,
  theme = "light",
}: AmethystProviderProps) {
  React.useEffect(() => {
    // Inject Plus Jakarta Sans font via Google Fonts
    if (!document.getElementById("plus-jakarta-sans-font")) {
      const link = document.createElement("link");
      link.id = "plus-jakarta-sans-font";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className={`amethyst-theme ${theme} ${className ?? ""}`}>
      {children}
    </div>
  );
}
