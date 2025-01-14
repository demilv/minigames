import {  Close, FrameJuego, Pestana } from "../../styledC/shop/pestañaTrial";

interface trial {
    closeTrial1: () => void;
  }
  

const Trial1: React.FC<trial> = ({closeTrial1}) => {
    return(
        <Pestana>
            <Close src="X.png"/>
            <FrameJuego></FrameJuego>
        </Pestana>
    )
}

export default Trial1;