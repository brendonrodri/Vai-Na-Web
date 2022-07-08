import React from "react"
import FooterComponent from "./Components/Footer"
import { GlobalStyle } from "./Components/GlobalStyles"
import HeaderComponent from "./Components/Header/index"
import MainComponent from "./Components/Main"
import NavBar from "./Components/NavBar"
import "./style.css"
export default function App (){
  return(
    <>
      <GlobalStyle />
      {NavBar()}
      {HeaderComponent()}
      {MainComponent()}
      {FooterComponent()}
    </>
  );
}