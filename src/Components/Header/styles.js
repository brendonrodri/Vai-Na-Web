import styled from "styled-components";
import headerbackground from "../../Assets/headerbackground.png"

export const HeaderContainer = styled.header`
    width: 100%;
    height: 100vh;
    background: url(${headerbackground});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    `
export const HeaderTitleComponent = styled.div`
    width: 70%;
    height: 14vh;
   margin-bottom: 20px;
    position: relative;
    bottom: 2%;
    left: 15%;
`
export const HeaderTitle = styled.h1`
    font:  normal 800 2.5em Montserrat;
    color: #FFAC2D;
`
export const TitleSpan = styled.span`
    font:  normal 300 1em Montserrat;
    letter-spacing: 0px;
    color: #FF611E;
`
export const HeaderParagraph = styled.p`
    color: #fff;
    font: normal  300 1.2em Montserrat;
    position: relative;
    left: 15%;
    b{
        color: #FED5B2;
    }
`
export const SubscribeCard = styled.div`
    width: 43vw;
    height: 26vh;
    padding: 13px;
    background: #FFFFFF;
    box-shadow: 0px 5px 12px #00145D29;
    border-radius: 20px;
    margin: 30px 0 5px 0;
    position: relative;
    left: 15%;
    p{
        font-size: 1.4em;
        margin: 10px 0 0 0 ;
        color: #272727;
    }
`
export const SvgBox = styled.div`

`