import { ProductFrame } from "../../styledC/productFrame";

function Shop (){

    return (
        <>
            <ProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"}>
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
            <ProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"} inverse={true}>
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
            <ProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"}>
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