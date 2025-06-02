import { StyledInstructionsDiv, StyledLadoInfo, StyledProductFrame, StyledPageButton, StyledQuickDescription, StyledSIImg, StyledSITitle, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";
import { useEffect, useState } from "react";
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
    const [isScrollOpen, setScrollOpen] = useState<null | "review" | "instructions">(null);
    const [gameSelected, setGameSelected] = useState("")
    const [pageActual, setPageActual] = useState(1)
    const [pages, setPages] = useState(1)
    const [pageButtons, setPageButtons] = useState<JSX.Element[]>([]);
    const [buttonsMostrar, setButtonsMostrar] = useState<JSX.Element[]>([])
    const openChat = () => setChatOpen(true); 
    const closeChat = () => setChatOpen(false);
    const openScroll1 = () => setScrollOpen("review")
    const openScroll2 = () => setScrollOpen("instructions")
    const closeScroll = () => setScrollOpen(null)
    const gameData = useSelector(gamesDataSelect)   


    useEffect(() => {
        if (!gameData) return;        
        setPages(Math.ceil(gameData.length / 3));
        
        const buttons = [];
        for (let i = 0; i < pages; i++) {
            buttons.push(
                <StyledPageButton onClick={() => {setPageActual(i)}} key={i}>
                    {i + 1}
                </StyledPageButton>
            );
        }
        setPageButtons(buttons)
    }, [gameData]) 

    useEffect(() => {
        if (pageButtons.length === 0) return;
        const firstButton = Math.max(pageActual-1, 1)
        const lastButton = Math.min(pageActual+1, pages-1)
        const buttons = pageButtons.slice(firstButton, lastButton+1)
        setButtonsMostrar(buttons)
    }, [pageActual, pageButtons, pages])



    return (
        <>        
            {isScrollOpen && <Scrolls closeScroll = {closeScroll} dataToShow={isScrollOpen} gameToShow={gameSelected}/>}
            <StyledMain>
            {isChatOpen && <ChatBubble closeChat={closeChat}/>}
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