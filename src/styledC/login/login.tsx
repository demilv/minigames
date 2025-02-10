import styled from "styled-components";

export const StyledLoginDiv = styled.div`
    position:fixed;
    display:flex;
    flex-direction:row;
    z-index:10000000;
    width: 80%;
    height:80%;
    margin:3% 0 0 5%;
`

export const StyledLoginFirstHalf = styled.img`
    width:80%;
`

export const StyledLoginSecondHalf = styled.div`
    display:flex;
    flex-direction:column;
    padding: 10% 0;
    background-color: #0889d7;
    width:80%;
    gap:1.75em;
    align-items:center;
`

export const StyledLoginCajas = styled.input`
    border-radius:30px;
    border: 1px solid;
    height: 3.5em;
    text-align:center;
    width:50%;    
`