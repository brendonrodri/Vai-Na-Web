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
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
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
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
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
    -webkit-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn .1s ease-in-out;
    animation: fadeIn 1s ease-in-out;
    @-webkit-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-moz-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @-o-keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    @keyframes fadeIn {
        from { opacity: 0;
             transform: translateX(-100px);
        }
        to { opacity: 1;
            transform: translateX(0px);
        }
    }
    p{
        font-size: 1.4em;
        margin: 10px 0 0 0 ;
        color: #272727;
    }
`