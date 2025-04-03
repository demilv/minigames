import styled from "styled-components";

export const WhiteForm = styled.form`
    width:80%;
    height:80%;
    display:flex;
    flex-direction:column;
    margin:0 auto;
    padding-top: 5em;
    border-radius:1em;
`

export const ErrorText = styled.h6<{mTop?:number, mBottom?: number}>`
    font-family:"Press Start 2P";
    color:rgb(226, 21, 21);
    margin: ${props => props.mTop ? `${props.mTop}em` : `0`} 0 ${props => props.mBottom ? `${props.mBottom}em` : `0`} 5em    
`