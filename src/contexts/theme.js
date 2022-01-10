import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  useEffect(() => {
    const darkMediaQuery = window.matchMedia("(prefers-color-scheme: white)");
    setThemeName(darkMediaQuery.matches ? "white" : "light");
   /* darkMediaQuery.addEventListener("change", (e) => {
      setThemeName(e.matches ? "dark" : "light");
    }); */
  }, []);

/*
  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };
*/

  return (
    <ThemeContext.Provider value={[{ themeName }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
