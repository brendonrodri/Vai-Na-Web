import styled from "styled-components";
export const FormacaoComponent = styled.section`
    width: 100%;
    margin-top: 0px;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    h2{
        font-size: 2.3em;
        color: #00145D;
        margin-left: 10px;
        margin-top: 10px;
    }
    img{
        width: 649px;
        height: 439px;
    }
`
export const FormacaoTextBox = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    position: relative;
    left: 7%;
    top: 5%;
`
export const FormacaoDescriptionBox = styled.div`
    width: 70%;
    display: flex;
    margin-top: 10px;
    div{
        width: 100%;
    }
`