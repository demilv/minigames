import {  FrameJuego, Pestana } from "../../styledC/shop/pestañaTrial";

interface trial {
    closeTrial1: () => void;
  }
  

const Trial1: React.FC<trial> = ({closeTrial1}) => {
    return(
        <Pestana>
            <FrameJuego></FrameJuego>
        </Pestana>
    )
}

export default Trial1;