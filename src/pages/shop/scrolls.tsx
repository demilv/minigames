import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"
import { ScrollText, ScrollFrame } from "../../styledC/shop/scrolls"
import { CloseChatButton } from "../../styledC/shop/Chat"

interface scrollsInterface {
    closeScroll: () => void
    dataToShow: string
}

const Scrolls: React.FC<scrollsInterface> = ({closeScroll, dataToShow}) => {


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