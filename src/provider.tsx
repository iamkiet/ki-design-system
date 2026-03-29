import * as React from "react";

export interface KiThemeContextValue {
  theme: "light" | "dark";
}

export const KiThemeContext = React.createContext<KiThemeContextValue>({
  theme: "light",
});

export function useKiTheme(): KiThemeContextValue {
  return React.useContext(KiThemeContext);
}

export interface KiProviderProps {
  children: React.ReactNode;
  /**
   * Sets the color scheme. Applies `.dark` class to the wrapper when "dark".
   * @default "light"
   */
  theme?: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
}

export function KiProvider({
  children,
  theme = "light",
  className,
  style,
}: KiProviderProps) {
  return (
    <KiThemeContext.Provider value={{ theme }}>
      {/*
       * Google Fonts — loaded via <link> in <head> by consumers,
       * or via a <style> tag here as a fallback.
       * Using a <style> with @import is SSR-safe (no DOM manipulation).
       */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');`}</style>
      <div
        className={[
          "amethyst-theme",
          theme === "dark" ? "dark" : "",
          className ?? "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={style}
      >
        {children}
      </div>
    </KiThemeContext.Provider>
  );
}

/**
 * @deprecated Use `KiProvider` instead.
 */
export const AmethystProvider = KiProvider;
