import styled from "styled-components";
export const EventsContainer = styled.section`
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    top: 100px;
    margin: 10px auto;
    section{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        left: 2%;

    }
    h2{
        position: relative;
        left: 11%;
    }
    h3{
        font-size: 2.2em;
    }
`
export const EventsImg = styled.img`
    width: 70vw;
    position: relative;
    left: 20px;
    
`
export const EventsTextCard = styled.div`
    width: 30%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    top: 10%;
    right: 30px;
    

`