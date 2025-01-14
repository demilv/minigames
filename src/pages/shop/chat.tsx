import { Chat, ChatEscritura } from "../../styledC/shop/Chat";

interface trial {
    closeChat: () => void;
  }
  

const ChatBubble: React.FC<trial> = ({closeChat}) => {
    return(
        <Chat>
            <ChatEscritura></ChatEscritura>
        </Chat>
    )
}

export default ChatBubble;