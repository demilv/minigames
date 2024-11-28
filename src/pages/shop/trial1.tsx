import { Pestaña } from "../../styledC/shop/pestañaTrial1";

interface trial {
    closeTrial1: () => void;
  }
  

const Trial1: React.FC<trial> = ({closeTrial1}) => {
    return(
        <Pestaña>

        </Pestaña>
    )
}

export default Trial1;