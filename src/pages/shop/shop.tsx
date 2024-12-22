import { StyledInstructions, StyledLadoInfo, StyledProductFrame, StyledQuickDescription, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/shop/Main";
import { MUIButton, MUIButtonGroup } from "../../styledC/shop/MUIButtons";
import Trial1 from "./trial1";
import { useState } from "react";

function Shop (){

    const [isTrial1Open, setTrial1Open] = useState(false);

    const openTrial1 = () => setTrial1Open(true); 
    const closeTrial1 = () => setTrial1Open(false); 

    return (
        <>
            {isTrial1Open && <Trial1 closeTrial1={closeTrial1} />}
            <StyledMain>        
                <StyledProductFrame back={"Leonardo_Phoenix_tic_tac_toe_with_3_rows_and_3_columns_there_s_2.jpg"}>
                    <StyledLadoInfo>
                        <StyledTitleProduct>Ultimate TTT</StyledTitleProduct>
                        <StyledQuickDescription>Quick up to 2-player matches where the winner takes it all!</StyledQuickDescription>
                        <MUIButtonGroup>
                            <MUIButton> Buy!</MUIButton>
                            <MUIButton onClick={openTrial1}> Try it!</MUIButton>
                        </MUIButtonGroup>
                    </StyledLadoInfo>
                    <StyledInstructions>Instructions</StyledInstructions>
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