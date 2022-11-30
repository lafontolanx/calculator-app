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

  return (
    <ThemeProvider theme={theme}>
      <Header onChange={
        checked => {
          setTheme(checked ? dark : light)
        }
      }/>
      <Input/>
      <Keys />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;

