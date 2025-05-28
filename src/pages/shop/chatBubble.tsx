import {  Chat,  ChatReplies,  ChatInputContainer,  ChatInput,  ChatSendButton,  CloseChatButton} from "../../styledC/shop/Chat";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

interface trial {
  closeChat: () => void;
}

const socket = io("http://localhost:3001");

const ChatBubble: React.FC<trial> = ({ closeChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("receive-message", (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("receive-message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("send-message", message);
    setMessage("");
  };

  return (
    <Chat>
      <CloseChatButton onClick={closeChat} src="X.png" />
      <ChatReplies>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </ChatReplies>
      <ChatInputContainer>
        <ChatInput type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Escribe un mensaje..." 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <ChatSendButton onClick={sendMessage}>Enviar</ChatSendButton>
      </ChatInputContainer>
    </Chat>
  );
};

export default ChatBubble;
