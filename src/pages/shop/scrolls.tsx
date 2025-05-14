import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"
import { ScrollText, ScrollFrame } from "../../styledC/shop/scrolls"
import { CloseChatButton } from "../../styledC/shop/Chat"
import { gamesDataSelect } from "../../features/gameOperations/gameSlice"
import { useSelector } from "react-redux"

interface scrollsInterface {
    closeScroll: () => void
    dataToShow: string
}

const Scrolls: React.FC<scrollsInterface> = ({closeScroll, dataToShow}) => {

    const gamesData = useSelector(gamesDataSelect)

    return (
        <BlackScreen>
            <CloseChatButton onClick={closeScroll} src="X.png" />
            <ScrollFrame>
                <ScrollText>{dataToShow}</ScrollText>
            </ScrollFrame>
        </BlackScreen>
    )
}

export default Scrolls