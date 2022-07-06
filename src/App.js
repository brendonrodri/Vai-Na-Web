import React from "react"
import { createGlobalStyle } from "styled-components"
import HeaderComponent from "./Components/Header/index"
import "./style.css"
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
`
export default function App (){
  return(
    <>
      <GlobalStyle />
      {HeaderComponent()}
    </>
  )
}