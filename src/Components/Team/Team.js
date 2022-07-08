import React, {useState} from "react"
import teamData from "./TeamData"
import * as S from "./styles"
export default function TeamComponent (){
    const [team, setTeam] = useState(teamData)
    const [input, setInput] = useState()
    
    return(
        <S.TeamContainer>
            <S.SearchBar>
            <S.InputSearch type="text" value={input} onChange={(e)=>{
                    setInput(e.target.value)
            }} />
            </S.SearchBar>
            <S.TeamListContainer>
                <S.List>
                    {team.filter((prevState)=>{
                        if(!input){
                            return prevState
                        }else if(
                            prevState.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
                        ){
                          return prevState      
                        }
                    })
                    .map((prevState, key)=>(
                       <S.TeamCard key={key}>
                            <S.ListItem>{prevState.name}</S.ListItem>
                            <S.ListItem>#{prevState.position}</S.ListItem>
                       </S.TeamCard>
                    ))
                    }
                </S.List>
            </S.TeamListContainer>
        </S.TeamContainer>
    )
}