// Import React Context utilities
import { createContext, useContext } from "react";

// Creating a global theme context
// This context will store theme state and theme changing functions
export const ThemeContext = createContext({
    themeMode: "light",

    // Default empty functions
    // These will be replaced by actual functions from ThemeProvider
    darkTheme: () => {},
    lightTheme: () => {},
});


// Exporting Provider so App can share theme data with components
export const ThemeProvider = ThemeContext.Provider;


// Custom hook to easily access theme context
// Instead of writing useContext(ThemeContext) everywhere
export default function useTheme() {
    return useContext(ThemeContext);
}
