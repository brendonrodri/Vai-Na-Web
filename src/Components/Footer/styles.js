import styled from "styled-components";
import Footerbackground from "../../Assets/footerbackground.jpg"
export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
   
    width: 100%;
    height: 55vh;
    background: url(${Footerbackground});
    background-size: cover;
    h2{
        margin: 10px;
        position: relative;
        left: 10%;
        bottom: 10%;
    }
`
export const SocialMedia = styled.div`
    display: flex;
    width: 60%;
    position: relative;
    top: 3%;
    left: 10%;
   
    a{
        margin: 15px
    }
    p{
        margin: 10px;
        width: 30%;
        color: #fff;
        font-size: 1.2em;
    }   
`