import { StyledInstructionsDiv, StyledLadoInfo, StyledProductFrame, StyledQuickDescription, StyledSIImg, StyledSITitle, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";
import Trial1 from "./trial1";
import { useState } from "react";
import { OpenChatButton } from "../../styledC/shop/Chat";
import ChatBubble from "./chatBubble";

function Shop (){

    const [isChatOpen, setChatOpen] = useState(false);
    const [isTrial1Open, setTrial1Open] = useState(false);    

    const openTrial1 = () => setTrial1Open(true); 
    const closeTrial1 = () => setTrial1Open(false);
    const openChat = () => setChatOpen(true); 
    const closeChat = () => setChatOpen(false);

    return (
        <>
            {isTrial1Open && <Trial1 closeTrial1={closeTrial1} />}
            <StyledMain>
            {isChatOpen && <ChatBubble closeChat={closeChat}/>}
                <OpenChatButton onClick={openChat} src="bubbleChat.png" />
                <StyledProductFrame back={"Leonardo_Phoenix_tic_tac_toe_with_3_rows_and_3_columns_there_s_2.jpg"}>
                    <StyledInstructionsDiv>
                        <StyledSITitle>Ranking</StyledSITitle>
                        <StyledSIImg src="scroll.png"/>
                    </StyledInstructionsDiv>
                    <StyledLadoInfo>
                        <StyledTitleProduct>Ultimate TTT</StyledTitleProduct>
                        <StyledQuickDescription>Quick up to 2-player matches where the winner takes it all!</StyledQuickDescription>
                        <MUIButtonGroup>
                            <MUIButton> Buy!</MUIButton>
                            <MUIButton onClick={openTrial1}> Try it!</MUIButton>
                        </MUIButtonGroup>
                    </StyledLadoInfo>
                    <StyledInstructionsDiv inverse={true}>
                        <StyledSITitle>Instructions</StyledSITitle>
                        <StyledSIImg src="scroll.png"/>
                    </StyledInstructionsDiv>
                </StyledProductFrame>
                <StyledProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"} inverse={true}>
                    <article className="producto__ladoInfo">
                        <h1></h1>
                        <h5></h5>
                        <div className="producto__ladoInfo__acciones">
                            <button> Buy!</button>
                            <button> Try it!</button>
                        </div>
                    </article>
                </StyledProductFrame>
                <StyledProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"}>
                    <article className="producto__ladoInfo">
                        <h1></h1>
                        <h5></h5>
                        <div className="producto__ladoInfo__acciones">
                            <button> Buy!</button>
                            <button> Try it!</button>
                        </div>
                    </article>
                    <img />
                </StyledProductFrame>
            </StyledMain>
        </>
    )

}

export default Shop