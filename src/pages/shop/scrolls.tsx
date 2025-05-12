import React from "react"
import { BlackScreen } from "../../styledC/generic/Screens"

interface scrolls {
    showData: (data: string) => void
}

const scrolls: React.FC<scrolls> = ({showData}) => {


    return (
        <BlackScreen>
            
        </BlackScreen>
    )
}

export default scrolls