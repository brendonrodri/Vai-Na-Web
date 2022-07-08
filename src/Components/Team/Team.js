import React, {useState} from "react";
import teamData from "./TeamData";
import * as S from "./styles";
export default function TeamComponent (){
    const [team, setTeam] = useState(teamData)
    const [input, setInput] = useState()
    const SearchFilter = ()=>{
        return(
            <S.List>
            {team.filter((prevState)=>{
                if(!input){
                    return prevState
                    } else if(
                        prevState.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
                    ){
                    return prevState      
                    }
                })
                .map((prevState, key)=>(
                <S.TeamCard key={key}>
                        <img src={prevState.img} />
                        <S.ListItem>{prevState.name}</S.ListItem>
                        <S.ListItemAlt>#{prevState.position}</S.ListItemAlt>       
                </S.TeamCard>
                ))
            };
        </S.List>
        );
    };
    return(
        <S.TeamContainer id="Team">
           
            <S.SearchBar>
                <S.InputSearch type="text" value={input} placeholder="Pesquisar..." onChange={(e)=>{
                        setInput(e.target.value)
                }} />
            </S.SearchBar>
                {SearchFilter()}
        </S.TeamContainer>
    );
}