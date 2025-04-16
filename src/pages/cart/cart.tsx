import { StyledCartFramePage, StyledCartLeftFrameImgPage, StyledCartSideFramePage } from "../../styledC/cart/cart";
import { StyledGenericTitleProfile, StyledNothing } from "../../styledC/generic/Text";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import { StyledMain } from "../../styledC/generic/Screens";


interface cart {
    cart: string[]
}

const Cart: React.FC<cart> = ({cart}) => {

    const gamesData = useSelector(gamesDataSelect);    

    const renderProduct = () => {
        return gamesData.map((game) => (
                    <StyledCartFramePage key={game._id}>                        
                        <StyledCartSideFramePage>
                            <StyledCartLeftFrameImgPage src={game.bImage} alt={game.name} />
                            <StyledGenericTitleProfile>{game.name}</StyledGenericTitleProfile>
                        </StyledCartSideFramePage> 
                        <StyledCartSideFramePage>
                            <StyledNothing></StyledNothing>    
                            <StyledNothing></StyledNothing>    
                        </StyledCartSideFramePage>                      
                    </StyledCartFramePage>
        ));
    }

    return (
        <StyledMain>
            {cart.length > 0 && renderProduct()}                
            {cart.length === 0 && <StyledCartLeftFramePage>
                <StyledNothing>Aquí no hay nada</StyledNothing>
                <StyledNothing>Ve a la tienda a pillar algo</StyledNothing>
            </StyledCartLeftFramePage>}
        </StyledMain>
    )
}

export default Cart;