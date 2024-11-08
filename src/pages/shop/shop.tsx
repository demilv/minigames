import { ProductFrame } from "../../styledC/productFrame";

function Shop (){

    return (
        <>
            <ProductFrame back={"tic-tac-toe-game-vector-icon-sign-seamless-pattern-on-a-gray-background-GT7G95.jpg"}>
                <div className="producto__ladoInfo">
                    <h1>Ahoy</h1>
                    <h5>Mahalo!</h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </div>
                <img src="./ultimate-tic-tac-toe-multiplayer_big.webp"/>
            </ProductFrame>
            <ProductFrame back={"pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"} inverse={true}>
            <div className="producto__ladoInfo">
                    <h1></h1>
                    <h5></h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </div>
                <img />
            </ProductFrame>
            <ProductFrame back={"pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"}>
            <div className="producto__ladoInfo">
                    <h1></h1>
                    <h5></h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </div>
                <img />
            </ProductFrame>
        </>
    )

}

export default Shop