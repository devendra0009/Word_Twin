import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import "./Header.css";

const Header = ({ word, setWord, darkMode }) => {
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <div className="header">
      {/* title */}
      <span className="title">{word ? word : "WORD TWIN"}</span>
      <div className="inputs">
        {/* providing dark theme using material ui */}
        <ThemeProvider theme={darkTheme}>
          {/* search bar */}
          <TextField
            className="search"
            id="filled-basic"
            label="Search a Word"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
            variant="filled"
          />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
