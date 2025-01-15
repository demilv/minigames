import { Chat, ChatEscritura, ChatReplies } from "../../styledC/shop/Chat";

interface trial {
    closeChat: () => void;
  }
  

const ChatBubble: React.FC<trial> = ({closeChat}) => {
    return(
        <Chat>
            <ChatReplies></ChatReplies>
            <ChatEscritura></ChatEscritura>
        </Chat>
    )
}

export default ChatBubble;