import React from "react"
import AboutComponent from "../About"
import EventsComponent from "../Events";
import FormacaoComponent from "../Formação"
import TeamComponent from "../Team/Team";
import * as S from "./styles"
export default function MainComponent(){
    return(
        <S.MainContainer>
            <AboutComponent />
            <FormacaoComponent />
            <TeamComponent />
            <EventsComponent />
            
        </S.MainContainer>
    );
}