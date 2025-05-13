import { StyledInstructionsDiv, StyledLadoInfo, StyledProductFrame, StyledQuickDescription, StyledSIImg, StyledSITitle, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";
import { useState } from "react";
import { OpenChatButton } from "../../styledC/shop/Chat";
import ChatBubble from "./chatBubble";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import Scrolls from "./scrolls";

interface shop {
    addItemCart: (gameId: string) => void
}

const Shop: React.FC<shop> = ({addItemCart}) => {

    const [isChatOpen, setChatOpen] = useState(false);
    const [isScroll1Open, setScroll1Open] = useState(false);
    const [isScroll2Open, setScroll2Open] = useState(false);
    const openChat = () => setChatOpen(true); 
    const closeChat = () => setChatOpen(false);
    const openScroll1 = () => setScroll1Open(true)
    const openScroll2 = () => setScroll2Open(true)
    const closeScroll1 = () => setScroll1Open(false)
    const closeScroll2 = () => setScroll2Open(false)
    const gameData = useSelector(gamesDataSelect)



    return (
        <>
            <StyledMain>
            {isChatOpen && <ChatBubble closeChat={closeChat}/>}
            {isScroll1Open && <Scrolls closeScroll1 = {closeScroll1}/>}
            {isScroll2Open && <Scrolls closeScroll2 = {closeScroll2}/>}
                <OpenChatButton onClick={openChat} src="bubbleChat.png" />  
                {gameData.map((game) => 
                    game.status === true ? (
                    <StyledProductFrame key={game._id} back={game.bImage}>
                        <StyledInstructionsDiv>
                            <StyledSITitle>Reviews</StyledSITitle>
                            <StyledSIImg onClick= {openScroll1} src="scroll.png"/>
                        </StyledInstructionsDiv>
                        <StyledLadoInfo>
                            <StyledTitleProduct>{game.name + ' ' + game.price + '$'}</StyledTitleProduct>
                            <StyledQuickDescription>Quick up to 2-player matches where the winner takes it all!</StyledQuickDescription>
                            <MUIButtonGroup>
                                <MUIButton onClick={() => addItemCart(game._id)}> Add to cart!</MUIButton>
                            </MUIButtonGroup>
                        </StyledLadoInfo>
                        <StyledInstructionsDiv inverse={true}>
                            <StyledSITitle>Instructions</StyledSITitle>
                            <StyledSIImg onClick = {openScroll2} src="scroll.png"/>
                        </StyledInstructionsDiv>
                    </StyledProductFrame> ) : null
                )}            
            </StyledMain>
        </>
    )

}

export default Shop