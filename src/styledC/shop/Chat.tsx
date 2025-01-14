import styled from "styled-components";

export const Chat = styled.div`
    position:fixed;
    width:15%;
    height:50%;
    margin-left:85%;
    z-index:9999999;
`

export const ChatEscritura = styled.textarea`
    width: 100%;  
    height: 15%;
    padding: 0.2em;
    font-size: 1em;
    resize: none;
    box-sizing: border-box;
`;

export const OpenChatButton = styled.img`
    width:6%;
    height:11.5%;
    position:fixed;
    right:0.3%;
    bottom:0.5%;
    z-index:99999
`
