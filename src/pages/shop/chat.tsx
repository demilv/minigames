import { Chat, ChatEscritura } from "../../styledC/shop/Chat";

interface trial {
    closeChat: () => void;
  }
  

const Trial1: React.FC<trial> = ({closeChat}) => {
    return(
        <Chat>
            <ChatEscritura></ChatEscritura>
        </Chat>
    )
}

export default Trial1;