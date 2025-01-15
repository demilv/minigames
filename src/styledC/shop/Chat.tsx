import styled from "styled-components";

export const Chat = styled.div`
    position:fixed;
    width:10%;
    height:75%;
    margin-top:10vh;
    margin-left:83%;
    z-index:9999999;
    background-color:pink;
    display:flex;
    flex-direction:column;
`

export const ChatReplies = styled.div`
    height:72%
`

export const ChatEscritura = styled.textarea`
    width: 80%;  
    height: 15%;
    padding: 0.2em;
    font-size: 1em;
    resize: none;
    box-sizing: border-box;
    margin:0 auto;
`;

export const OpenChatButton = styled.img`
    width:6%;
    height:11.5%;
    position:fixed;
    right:0.3%;
    bottom:0.5%;
    z-index:99999
`

export const CloseChatButton = styled.img`
    margin-left:65%;
    width:40%;
    height:10%
`
