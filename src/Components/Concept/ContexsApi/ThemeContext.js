const { createContext, useReducer, useContext } = require("react");

const theame = {
  light: { backgraund: "#ffffff", color: "#000000" },
  dark: { backgraund: "#000000", color: "#ffffff" },
};

const theameReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEAME":
      return state.mode === "light"
        ? { mode: "dark", ...theame.dark }
        : { mode: "light", ...theame.light };
    default:
      return state;
  }
};

const initialState = { mode: "light", ...theame.light };

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(theameReducer, initialState);
  return (
    <ThemeContext.Provider
      value={{
        theame: state,
        toggleTheme: () => dispatch({ type: "TOGGLE_THEME" }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = useContext(ThemeContext);