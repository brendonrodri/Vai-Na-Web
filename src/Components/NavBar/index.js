import React from "react";
import * as S from "./styles"
import { LinkStyle, LogoSmall } from "../GlobalStyles";
import LogoSmallImg from "../../Assets/LogoSmall.png"
const NavBar = ()=>{
    return(
        <S.NavBarContainer>
            <a href=""><LogoSmall src={LogoSmallImg} alt="Logomarca do Vai na Web. Letras amarelas com o contorno azul e viração laranja" /></a>
            <MenuList/>
        </S.NavBarContainer>
    );
}

export const  MenuList = ()=>{
    return(
        <S.MenuList>
            <S.MenuItem> 
                <LinkStyle  href="">Sobre</LinkStyle>
            </S.MenuItem>
            <S.MenuItem> 
                <LinkStyle  href="">Formação</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="">Equipe</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="">Eventos</LinkStyle>
            </S.MenuItem>
            <S.MenuItem>
                <LinkStyle  href="">Contatos</LinkStyle>
            </S.MenuItem>
        </S.MenuList>
    );
}

export default NavBar
