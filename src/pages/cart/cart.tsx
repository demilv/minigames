import { StyledCartFramePage, StyledCartLeftFrameImgPage, StyledCartSideFramePage, StyledCartButtonContainer } from "../../styledC/cart/cart";
import { StyledGenericTitleProfile, StyledNothing } from "../../styledC/generic/Text";
import { gamesDataSelect } from "../../features/gameOperations/gameSlice";
import { useSelector } from "react-redux";
import { StyledMain } from "../../styledC/generic/Screens";
import { MUIButton, MUIButtonGroup } from "../../styledC/generic/MUIButtons";


interface cart {
    cart: string[],
    removeItemCart: (id: string) => void,
    removeAllItemCart: () => void,
    addGameToUser: (id: string[]) => Promise<boolean>
}

const Cart: React.FC<cart> = ({cart, removeItemCart, removeAllItemCart, addGameToUser}) => {    

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
                                    <MUIButton onClick={async () => {
                                        const compraCorrecta = await addGameToUser([game._id]);
                                        if (compraCorrecta){
                                            removeItemCart(game._id)
                                        }
                                    }}> Comprar!</MUIButton>
                                </MUIButtonGroup>
                                <MUIButtonGroup>
                                    <MUIButton onClick={() => removeItemCart(game._id)}> Eliminar!</MUIButton>
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
            {cart.length > 0 && 
            <MUIButtonGroup>
                <MUIButton onClick= {async () => {
                   const compraCorrecta = await addGameToUser(cartGames.map(game => game._id))
                   if (compraCorrecta){
                    removeAllItemCart()
                   }}}> ¿Comprar todo?</MUIButton>
                <MUIButton onClick= {removeAllItemCart}> ¿Eliminar carrito?</MUIButton>
            </MUIButtonGroup>}
        </StyledMain>
    )
}

export default Cart;