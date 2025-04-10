import { StyledInstructionsDiv, StyledLadoInfo, StyledProductFrame, StyledQuickDescription, StyledSIImg, StyledSITitle, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";
import { useState } from "react";
import { OpenChatButton } from "../../styledC/shop/Chat";
import ChatBubble from "./chatBubble";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";

function Shop (){

    const [isChatOpen, setChatOpen] = useState(false);
    const openChat = () => setChatOpen(true); 
    const closeChat = () => setChatOpen(false);
    const gameData = useSelector(gamesDataSelect)



    return (
        <>
            <StyledMain>
            {isChatOpen && <ChatBubble closeChat={closeChat}/>}
                <OpenChatButton onClick={openChat} src="bubbleChat.png" />  
                {gameData.map((game) => 
                    game.status === true ? (
                    <StyledProductFrame key={game._id} back={game.bImage}>
                        <StyledInstructionsDiv>
                            <StyledSITitle>Reviews</StyledSITitle>
                            <StyledSIImg src="scroll.png"/>
                        </StyledInstructionsDiv>
                        <StyledLadoInfo>
                            <StyledTitleProduct>Ultimate TTT {game.price}</StyledTitleProduct>
                            <StyledQuickDescription>Quick up to 2-player matches where the winner takes it all!</StyledQuickDescription>
                            <MUIButtonGroup>
                                <MUIButton> Add to cart!</MUIButton>
                            </MUIButtonGroup>
                        </StyledLadoInfo>
                        <StyledInstructionsDiv inverse={true}>
                            <StyledSITitle>Instructions</StyledSITitle>
                            <StyledSIImg src="scroll.png"/>
                        </StyledInstructionsDiv>
                    </StyledProductFrame> ) : null
                )}            
            </StyledMain>
        </>
    )

}

export default Shop