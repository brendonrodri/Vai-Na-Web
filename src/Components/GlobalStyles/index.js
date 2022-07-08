import styled from "styled-components";
import { createGlobalStyle } from "styled-components"
export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
`
export const LinkStyle = styled.a`
    text-decoration: none;
    color: #fff;
`
export const LogoSmall = styled.img`
   position: relative;
   right: 30%;
   width: 68px;
   height: 44px;
`
export const LogoLg = styled.img`
    width: 362px;
    height: 210px;
    margin: 20px;
`
export const H2 = styled.h2`
    font: bold 2.2em Montserrat;
    color: #00145D;
`
export const H2Withe = styled.h2`
  font: bold 2.8em Montserrat;
    color: #ffffff;
`
export const H3 = styled.h3`
    font: normal normal bold 1.2em Montserrat;
    color: #0F2260;
    margin: 12px;
`
export const P = styled.p`
     font: 1.2em Montserrat;
     font-weight: 500;
     margin: 15px;
`
export const P2 = styled.p`
     font: .9em Montserrat;
     font-weight: 500;
     margin: 15px;
`
