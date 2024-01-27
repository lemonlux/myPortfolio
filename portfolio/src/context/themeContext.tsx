import { createContext, useContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme)

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
 
//   const [theme, setTheme] = useState("dark");

//   const value = useMemo(
//     () => ({
//       theme,
//       setTheme,
//     }),
//     [theme]
//   );

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeApp = () => {
  return useContext(ThemeContext);
};
