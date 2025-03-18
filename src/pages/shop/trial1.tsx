import {  Close, FrameJuego } from "../../styledC/shop/pestañaTrial";
import { BlackScreen } from "../../styledC/generic/Screens";

interface trial {
    closeTrial1: () => void;
  }
  

const Trial1: React.FC<trial> = ({closeTrial1}) => {
    return(
        <BlackScreen>
            <Close onClick={closeTrial1} src="X.png"/>
            <FrameJuego></FrameJuego>
        </BlackScreen>
    )
}

export default Trial1;