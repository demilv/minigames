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
    const [isScrollOpen, setScrollOpen] = useState<null | "reviews" | "instructions">(null);
    const [gameSelected, setGameSelected] = useState("")
    const openChat = () => setChatOpen(true); 
    const closeChat = () => setChatOpen(false);
    const openScroll1 = () => setScrollOpen("reviews")
    const openScroll2 = () => setScrollOpen("instructions")
    const closeScroll = () => setScrollOpen(null)
    const gameData = useSelector(gamesDataSelect)



    return (
        <>
            <StyledMain>
            {isChatOpen && <ChatBubble closeChat={closeChat}/>}
            {isScrollOpen && <Scrolls closeScroll = {closeScroll} dataToShow={isScrollOpen} gameToShow={gameSelected}/>}
                <OpenChatButton onClick={openChat} src="bubbleChat.png" />  
                {gameData.map((game) => 
                    game.status === true ? (
                    <StyledProductFrame key={game._id} back={game.bImage}>
                        <StyledInstructionsDiv>
                            <StyledSITitle>Reviews</StyledSITitle>
                            <StyledSIImg onClick= {() => {openScroll1(); setGameSelected(game._id)}} src="scroll.png"/>
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
                            <StyledSIImg onClick ={() => {openScroll2(); setGameSelected(game._id)}}  src="scroll.png"/>
                        </StyledInstructionsDiv>
                    </StyledProductFrame> ) : null
                )}            
            </StyledMain>
        </>
    )

}

export default Shop