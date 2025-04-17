import { StyledCartFramePage, StyledCartLeftFrameImgPage, StyledCartSideFramePage, StyledCartButtonContainer } from "../../styledC/cart/cart";
import { StyledGenericTitleProfile, StyledNothing } from "../../styledC/generic/Text";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";


interface cart {
    cart: string[]
}

const Cart: React.FC<cart> = ({cart}) => {

    const gamesData = useSelector(gamesDataSelect);   
    const cartGames = gamesData.filter(game => cart.includes(game._id)) 

    const renderProduct = () => {
        return cartGames.map((game) => (
                    <StyledCartFramePage key={game._id}>                        
                        <StyledCartSideFramePage>
                            <StyledCartLeftFrameImgPage src={game.bImage} alt={game.name} />
                            <StyledGenericTitleProfile>{game.name}</StyledGenericTitleProfile>
                        </StyledCartSideFramePage> 
                        <StyledCartSideFramePage>
                            <StyledNothing mBottom={3}>Price: {game.price}$</StyledNothing>    
                            <StyledNothing mBottom={2}>¿Quieres este juego?</StyledNothing>    
                            <StyledCartButtonContainer>
                                <MUIButtonGroup>
                                    <MUIButton> Comprar!</MUIButton>
                                </MUIButtonGroup>
                                <MUIButtonGroup>
                                    <MUIButton> Eliminar!</MUIButton>
                                </MUIButtonGroup>
                            </StyledCartButtonContainer>
                        </StyledCartSideFramePage>                      
                    </StyledCartFramePage>
        ));
    }

    return (
        <StyledMain mTop={20}>
            {cart.length > 0 && renderProduct()}                
            {cart.length === 0 && <StyledCartSideFramePage>
                <StyledNothing>Aquí no hay nada</StyledNothing>
                <StyledNothing>Ve a la tienda a pillar algo</StyledNothing>
            </StyledCartSideFramePage>}
        </StyledMain>
    )
}

export default Cart;