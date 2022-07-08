import React from "react";
import * as S from "./styles"
import { LinkStyle, LogoSmall } from "../GlobalStyles";
import LogoSmallImg from "../../Assets/LogoSmall.png"
const NavBar = ()=>{
    return(
        <S.NavBarContainer>
            <a href="#" target="_self"><LogoSmall src={LogoSmallImg} alt="Logomarca do Vai na Web. Letras amarelas com o contorno azul e viração laranja" /></a>
            <MenuList/>
        </S.NavBarContainer>
    );
}
export const  MenuList = ()=>{
    return(
        <S.MenuList>
            <S.MenuItem> 
                <LinkStyle  href="#About">Sobre</LinkStyle>
            </S.MenuItem>
            <S.MenuItem> 
                <LinkStyle  href="#Formation">Formação</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="#Team">Equipe</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="#Events">Eventos</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="#contacts">Contatos</LinkStyle>
            </S.MenuItem>
        </S.MenuList>
    );
}

export default NavBar
