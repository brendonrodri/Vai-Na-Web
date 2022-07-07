import styled from "styled-components";
import headerbackground from "../../Assets/headerbackground.png"

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    background: url(${headerbackground});
    z-index: 2;
  
`
export const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    width: 70%;
    margin-right: 5%;
    
`
export const MenuItem = styled.li`
    margin-right: 0%;
    padding: 10px;
    list-style: none;
    font-weight: lighter;
    font:  1.3em Montserrat;
    &:hover{
        font-weight: bold;
    }
`