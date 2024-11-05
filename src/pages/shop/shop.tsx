import { ProductFrame } from "../../styledC/productFrame";

function Shop (){

    return (
        <>
            <ProductFrame>
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
            <ProductFrame inverse={true}>
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
            <ProductFrame>
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