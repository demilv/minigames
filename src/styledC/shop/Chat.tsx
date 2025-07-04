import styled from "styled-components";

export const Chat = styled.div`
  position: fixed;
  width: 22%;
  height: 75%;
  right: 1%;
  top: 22%;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
  background: radial-gradient(circle, #ffffff 0%, #a4e5a4 45%,rgb(92, 204, 92) 100%);
`;

export const ChatReplies = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-size: 1.2em;
  font-family: "VT323";   
`;

export const ChatInputContainer = styled.div`
  display: flex;
  padding: 0.5em;
  gap: 0.5em;
  border-top: 2px solid #cde;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 0.5em;
  font-size: 1.2em;
  border-radius: 5px;
  border: 1px solid #aaa;
  font-family: "VT323";   
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
