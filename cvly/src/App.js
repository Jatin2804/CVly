import React, { useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { DarkmodeProvider, useDarkmode } from "./context/Darkmode";
import { DetailsProvider } from "./context/DetailsContext";
import { FormatterProvider } from "./context/FormatterContext";
import Header from "./components/Header";
import Details from "./components/Details";
import Preview from "./components/Preview";
import Resume from "./components/Resume";
import Hero from "./components/Hero";
import { Theme } from "./Theme";
import { useTheme } from "@emotion/react";
import "./App.css";

function ThemedApp() {
  const theme = useTheme();
  const { darkMode, setdarkMode } = useDarkmode();

  useEffect(()=>{
    const getMode = localStorage
  },[])

  return (
    <ThemeProvider theme={Theme(darkMode)}>
      <Header />
      <br />
      <Hero/>
      <br />
      <Details />
      <Preview />
      <Resume />
    </ThemeProvider>
  );
}

function App() {
  return (
    <FormatterProvider>
      <DarkmodeProvider>
        <DetailsProvider>
          <ThemedApp />
        </DetailsProvider>
      </DarkmodeProvider>
    </FormatterProvider>
  );
}

export default App;
