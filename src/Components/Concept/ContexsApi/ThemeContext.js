const { createContext, useReducer, useContext } = require("react");

const theme = {
  light: { background: "#ffffff", color: "#000000" },
  dark: { background: "#000000", color: "#ffffff" },
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return state.mode === "light"
        ? { mode: "dark", ...theme.dark }
        : { mode: "light", ...theme.light };
    default:
      return state;
  }
};

const initialState = { mode: "light", ...theme.light };

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <ThemeContext.Provider
      value={{
        theme: state,
        toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
