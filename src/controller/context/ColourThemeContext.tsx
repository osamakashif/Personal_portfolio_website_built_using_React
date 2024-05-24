import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

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
