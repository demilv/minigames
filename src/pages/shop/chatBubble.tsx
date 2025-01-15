import { Chat, ChatEscritura, ChatReplies, CloseChatButton } from "../../styledC/shop/Chat";

interface trial {
    closeChat: () => void;
  }
  

const ChatBubble: React.FC<trial> = ({closeChat}) => {
    return(
        <Chat>
            <CloseChatButton onClick={closeChat} src='X.png'/>
            <ChatReplies></ChatReplies>
            <ChatEscritura></ChatEscritura>
        </Chat>
    )
}

export default ChatBubble;