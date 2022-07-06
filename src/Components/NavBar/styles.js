import styled from "styled-components";

export const NavBarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  
`
export const MenuList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin-right: 5%;
    
`
export const MenuItem = styled.li`
    margin-right: 3%;
    padding: 10px;
    list-style: none;
    font-weight: lighter;
    font: normal normal normal 1.4em Montserrat;
    &:hover{
        font-weight: bold;
    }
`