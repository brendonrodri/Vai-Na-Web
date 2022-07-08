import styled from "styled-components";
import searchicon from "../../Assets/searchicon.png";
export const TeamContainer = styled.section`
    width: 80%;
    height: 150vh;
    padding: 20px;
    margin: 50px auto;
`
export const SearchBar = styled.div`
    background-color: #0F2260;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    margin: 5px auto;
`
export const InputSearch = styled.input`
    width: 15vw;
    height: 5vh;
    color: #BCE0FD;
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
export const TeamCard = styled.div`
    width: 17vw;
    height: 34vh;
    margin: 10px;;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    img{
        width: 100%;
        height: 34vh;
        opacity: .9;
        margin: 5px 10px; 
    }
`
export const List = styled.ul `
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   
`
export const ListItem = styled.li`
    color:  rgba(255, 255, 255, 0.9);
    list-style: none;
    font-family: 'Monteserrat', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
    text-align: center;
    position: relative;
    bottom: 60px;
`
export const ListItemAlt = styled.li`
    color:  rgba(255, 255, 255, 0.7);
    list-style: none;
    font-family: 'Monteserrat', sans-serif;
    text-align: center;
    position: relative;
    bottom: 65px;
    font-size: 1.1em;
`