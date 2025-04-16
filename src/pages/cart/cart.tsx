import { StyledCartFramePage, StyledCartLeftFramePage } from "../../styledC/cart/cart";
import { StyledNothing } from "../../styledC/generic/Text"

interface cart {
    cart: string[]
}

const Cart: React.FC<cart> = ({cart}) => {

    return (
        <StyledCartFramePage>
            <StyledCartLeftFramePage>
                {cart.length === 0 && <StyledNothing>Aquí no hay nada</StyledNothing>}
                {cart.length === 0 && <StyledNothing>Ve a la tienda a pillar algo</StyledNothing>}
            </StyledCartLeftFramePage>
        </StyledCartFramePage>
    )
}

export default Cart;