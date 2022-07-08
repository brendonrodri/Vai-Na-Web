import React from "react";
import * as S from "./styles";
import eventsimg from "../../Assets/eventsimg.png";
import { H2,H3, P2 } from "../GlobalStyles";
export default function EventsComponent (){
    return(
        <S.EventsContainer id="Events">   
            <H2>
                Eventos
            </H2>    
                <section>
                    <S.EventsImg src={eventsimg} alt="Layout de uma reunião online com diversas pessoas" />
                    <S.EventsTextCard>
                        <H3>Tech Girls</H3>
                        <P2>
                            Com o objetivo de promover network entre mulheres de tecnologia, conectar talentos femininos com oportunidades no mercado da tecnologia, oferecer experiências de troca através de eventos com mulheres que já têm experiência no mercado da tecnologia, acelerar os talentos com ajuda para custeio de luz e internet para facilitar o processo de estudo, promover mentoria para as participantes do grupo.
                        </P2>
                    </S.EventsTextCard>          
                </section>  
        </S.EventsContainer>
    );
}