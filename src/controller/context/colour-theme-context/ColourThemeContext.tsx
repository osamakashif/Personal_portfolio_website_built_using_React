import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import darkFavIcon from "../../../view/assets/favicons/dark/logo512.png";
import lightFavIcon from "../../../view/assets/favicons/light/logo512.png";

export const ColourThemeContext = createContext({
  theme: "auto",
  switchTheme: (newTheme: "auto" | "light" | "dark") => {},
});

export function ColourThemeContextProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState<"auto" | "light" | "dark">("auto");
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const cache_key = "theme";

  useEffect(() => {
    if (!firstLoad) {
      localStorage.setItem(cache_key, theme);
    }
  }, [theme, firstLoad]);

  useEffect(() => {
    const stored_value = localStorage.getItem(cache_key);
    if (
      stored_value === "auto" ||
      stored_value === "light" ||
      stored_value === "dark"
    ) {
      setTheme(stored_value);
    } else {
      setTheme(theme);
    }
    setFirstLoad(false);
  }, [theme]);

  useEffect(() => {
    let link: Element | HTMLLinkElement | null =
      document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      (link as HTMLLinkElement).rel = "icon";
      document.head.appendChild(link);
    }
    if (theme === "dark") {
      (link as HTMLLinkElement).href = darkFavIcon;
    } else if (theme === "light") {
      (link as HTMLLinkElement).href = lightFavIcon;
    } else {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? ((link as HTMLLinkElement).href = darkFavIcon)
        : ((link as HTMLLinkElement).href = lightFavIcon);
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "var(--dark-colour)";
    } else if (theme === "light") {
      document.body.style.backgroundColor = "var(--light-colour)";
    } else {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? (document.body.style.backgroundColor = "var(--dark-colour)")
        : (document.body.style.backgroundColor = "var(--light-colour)");
    }
  }, [theme]);

  const switchTheme = useCallback((newTheme: "auto" | "light" | "dark") => {
    if (newTheme === "auto" || newTheme === "light" || newTheme === "dark") {
      setTheme(newTheme);
    }
  }, []);

  const colourThemeContext = useMemo(
    () => ({
      theme,
      switchTheme,
    }),
    [theme, switchTheme]
  );
  return (
    <ColourThemeContext.Provider value={colourThemeContext}>
      {children}
    </ColourThemeContext.Provider>
  );
}
