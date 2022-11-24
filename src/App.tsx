import React from "react"
import { Header } from "./components/Header/header"
import { Input } from "./components/Input/input"
import { Keys } from "./components/Keys/keys"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <Header/>
      <Input/>
      <Keys/>
      <GlobalStyle />
    </>
  )
}

export default App
