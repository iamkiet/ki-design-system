// Styles — consumers import these explicitly: import "@iamkiet/ki-design-system/styles.css"
// This import triggers Vite to process and emit the stylesheet during build.
import "./styles/index.css";


export * from "./components/ui/button";
export * from "./components/ui/input";

export * from "./components/ui/switch";
export * from "./components/ui/checkbox";
export * from "./components/ui/badge";
export * from "./components/ui/card";
export * from "./components/ui/accordion";
export * from "./components/ui/avatar";
export * from "./components/ui/tabs";
export * from "./components/ui/skeleton";
export * from "./components/ui/alert";
export * from "./components/ui/alert-dialog";
export * from "./components/ui/sonner";
export * from "./components/ui/progress";
export * from "./components/ui/slider";
export * from "./components/ui/command";
export * from "./components/ui/input-otp";
export * from "./components/ui/select";
export * from "./components/ui/label";
export * from "./components/ui/separator";
export * from "./components/ui/radio-group";
export * from "./components/ui/dialog";
export * from "./components/ui/content-veil";
export * from "./components/ui/glass-panel";

// Provider — KiProvider is the primary export; AmethystProvider is a deprecated alias
export {
  KiProvider,
  AmethystProvider,
  KiThemeContext,
  useKiTheme,
  type KiProviderProps,
  type KiThemeContextValue,
} from "./provider";

export * from "./lib/utils";
