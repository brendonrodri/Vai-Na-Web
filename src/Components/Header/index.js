import React from "react"
import NavBar from "../NavBar"
import * as S from "./styles"
export default function HeaderComponent (){
    return(
        <S.HeaderContainer>
            {NavBar()}
        </S.HeaderContainer>
    )
}
