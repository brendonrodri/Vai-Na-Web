import React from "react"
import FormacaoText from "./Components/formacaoText"
import Formacaoimg from "../../Assets/Formacaoimg.jpg"
import * as S from "./styles";
export default function FormacaoComponent(){
    return(
        <S.FormacaoComponent>
            <FormacaoText />
            <img src={Formacaoimg} />
        </S.FormacaoComponent>
    );
}