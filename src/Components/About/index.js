import React from "react"
import AboutText from "./Components/aboutText"
import LogoLarger from "./Components/logoLarger"
import * as S from "./styles"
export default function AboutComponent (){
    return(
        <S.AboutContainer>
            <S.AboutLogoBox>
                <LogoLarger />
            </S.AboutLogoBox>
            <AboutText />
        </S.AboutContainer>
    )
}