import { StyledLadoInfo, StyledProductFrame, StyledQuickDescription, StyledTitleProduct } from "../../styledC/shop/productFrame";
import { StyledMain } from "../../styledC/shop/main";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Shop (){

    return (
        <StyledMain>        
            <StyledProductFrame back={"tic-tac-toe-game-vector-icon-sign-seamless-pattern-on-a-gray-background-GT7G95.jpg"}>
                <StyledLadoInfo>
                    <StyledTitleProduct>Ultimate TTT</StyledTitleProduct>
                    <StyledQuickDescription>Quick up to 2-player matches where the winner takes it all!</StyledQuickDescription>
                    <ButtonGroup>
                        <Button> Buy!</Button>
                        <Button> Try it!</Button>
                    </ButtonGroup>
                </StyledLadoInfo>
                <img src="./Leonardo_Phoenix_tic_tac_toe_with_3_rows_and_3_columns_there_s_2.jpg"/>
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
                <img />
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
    )

}

export default Shop