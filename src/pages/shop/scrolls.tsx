import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"

interface scrollsInterface {
    showData: (data: string) => void
    onClose: () => void
    dataToShow: string
}

const Scrolls: React.FC<scrollsInterface> = ({showData, onClose, dataToShow}) => {


    return (
        <BlackScreen>
            
        </BlackScreen>
    )
}

export default Scrolls