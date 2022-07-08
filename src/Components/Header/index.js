import React from "react";
import { LinkStyle, P } from "../GlobalStyles";
import SubscribeComponent from "./Components/SubscribeCard";
import * as S from "./styles";
export default function HeaderComponent (){
    return(
        <S.HeaderContainer>
                <S.HeaderTitleComponent>
                    <S.HeaderTitle>
                        <S.TitleSpan>//</S.TitleSpan> Quer construir uma carreira de sucesso como Desenvolvedor(a) Front-end?
                    </S.HeaderTitle>
                </S.HeaderTitleComponent>
                <SubscribeComponent />
                <S.HeaderParagraph><b>Link para o formulário</b> <LinkStyle href="http://bit.ly/CarreiraVaiNaWeb">bit.ly/CarreiraVaiNaWeb</LinkStyle></S.HeaderParagraph>
        </S.HeaderContainer>      
    );
}
