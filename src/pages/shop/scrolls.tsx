import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"
import { ScrollText, ScrollFrame } from "../../styledC/shop/scrolls"
import { Close } from "../../styledC/generic/Button"
import { gamesDataSelect } from "../../features/gameOperations/gameSlice"
import { useSelector } from "react-redux"
import { Game } from "../../features/types/interfaces"

interface scrollsInterface {
    closeScroll: () => void,
    dataToShow: string,
    gameToShow: string
}

const Scrolls: React.FC<scrollsInterface> = ({closeScroll, dataToShow, gameToShow}) => {

    const gamesData = useSelector(gamesDataSelect)
    const Data = () => {
        const game = gamesData.find(game => game._id === gameToShow)
        return game ? game[dataToShow as keyof Game] : null
    }
    const dataContent = Data()

    return (
        <BlackScreen>
            <Close onClick={closeScroll} src="X.png" />
            <ScrollFrame>
                <ScrollText>{dataContent}</ScrollText>
            </ScrollFrame>
        </BlackScreen>
    )
}

export default Scrolls