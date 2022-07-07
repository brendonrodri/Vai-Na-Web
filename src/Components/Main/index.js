import React from "react"
import AboutComponent from "../About"
import FormacaoComponent from "../Formação"
import * as S from "./styles"
export default function MainComponent(){
    return(
        <S.MainContainer>
            <AboutComponent />
            <FormacaoComponent />
        </S.MainContainer>
    );
}