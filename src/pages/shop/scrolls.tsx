import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"

interface scrollsInterface {
    showData: (data: string) => void
    onClose: () => void
}

const Scrolls: React.FC<scrollsInterface> = ({showData}) => {


    return (
        <BlackScreen>
            
        </BlackScreen>
    )
}

export default Scrolls