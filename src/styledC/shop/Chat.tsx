import styled from "styled-components";

export const Chat = styled.div`
  position: fixed;
  width: 25%;
  height: 75%;
  right: 1%;
  top: 10%;
  z-index: 9999;
  background-color: #ffe4e1; /* rosa suave */
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
`;

export const ChatReplies = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const ChatInputContainer = styled.div`
  display: flex;
  padding: 0.5em;
  gap: 0.5em;
  border-top: 1px solid #ccc;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.5em;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #aaa;
`;

export const ChatSendButton = styled.button`
  padding: 0.5em 1em;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const OpenChatButton = styled.img`
  width: 6%;
  height: 11.5%;
  position: fixed;
  right: 0.3%;
  bottom: 0.5%;
  z-index: 99999;
`;

export const CloseChatButton = styled.img`
  align-self: flex-end;
  width: 30px;
  height: 30px;
  margin: 0.5em;
  cursor: pointer;
`;
