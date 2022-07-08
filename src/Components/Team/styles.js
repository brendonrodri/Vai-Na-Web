import styled from "styled-components";
import searchicon from "../../Assets/searchicon.png"
export const TeamContainer = styled.section`
    width: 90%;
    height: 100vh;
    margin: 30px auto;
`
export const SearchBar = styled.div`
    background-color: #0F2260;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    margin: 5px 0;
`
export const InputSearch = styled.input`
    width: 15vw;
    height: 5vh;
    color: #fff;
    font-size: 1em;
    font-family: 'MontSerrat', sans-serif;
    margin-left: 5%;
    padding: 5px;
    border: 1px solid #fff;
    background-color: #0F2260;
    background-image: url(${searchicon});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
`
export const TeamListContainer = styled.div`
    width: 100%;
    height: 90%;
    padding: 10px;
    background: #0F2260;
`
export const TeamCard = styled.div`
    width: 13vw;
    height: 26vh;
    margin: 10px;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: end;
`
export const List = styled.ul `
   display: flex;
   flex-wrap: wrap;
`
export const ListItem = styled.li`
    color: #fff;
    margin: 5px;
    list-style: none;
    font-family: 'Monteserrat', sans-serif;
    text-align: center;
`