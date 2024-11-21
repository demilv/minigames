import { LadoInfo, ProductFrame } from "../../styledC/shop/productFrame";
import { Main } from "../../styledC/shop/main";

function Shop (){

    return (
        <Main>        
            <ProductFrame back={"tic-tac-toe-game-vector-icon-sign-seamless-pattern-on-a-gray-background-GT7G95.jpg"}>
                <LadoInfo>
                    <h1>Ahoy</h1>
                    <h5>Mahalo!</h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </LadoInfo>
                <img src="./Leonardo_Phoenix_tic_tac_toe_with_3_rows_and_3_columns_there_s_2.jpg"/>
            </ProductFrame>
            <ProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"} inverse={true}>
                <article className="producto__ladoInfo">
                    <h1></h1>
                    <h5></h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </article>
                <img />
            </ProductFrame>
            <ProductFrame back={"HD-wallpaper-orange-light-on-black-background-orange-line-background-luminous-background-orange-light-line-background.jpg"}>
                <article className="producto__ladoInfo">
                    <h1></h1>
                    <h5></h5>
                    <div className="producto__ladoInfo__acciones">
                        <button> Buy!</button>
                        <button> Try it!</button>
                    </div>
                </article>
                <img />
            </ProductFrame>
        </Main>
    )

}

export default Shop