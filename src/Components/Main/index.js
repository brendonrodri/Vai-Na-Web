import React from "react"
import AboutComponent from "../About"
import * as S from "./styles"
export default function MainComponent(){
    return(
        <S.MainContainer>
            <AboutComponent />
        </S.MainContainer>
    )
}