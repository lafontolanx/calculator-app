import React, { useState } from "react"
import { ThemeProvider } from "styled-components"

import light from "./styles/themes/light"
import dark from "./styles/themes/dark"

import { Header } from "./components/Header/header"
import { Input } from "./components/Input/input"
import { Keys } from "./components/Keys/keys"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  function handleInput() {
    console.log('oi');
  }

  return (
    <ThemeProvider theme={theme}>
      <Header onChange={toggleTheme}/>
      <Input />
      <Keys onButtonClick={handleInput}/>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;

