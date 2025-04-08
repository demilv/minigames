import styled from "styled-components";

export const StyledHeaderContainer= styled.div`
    height:7.9em;
    width: 100%;
    background-color: #bcbcbc;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0 4em;
    align-items:center;    
    position:fixed;
    z-index:9999999;
    opacity: 70%;
    border-radius:0 0 1em 1em;
    transition: 0.3s ease;


    &:hover {
        opacity:100%
    }
`

export const StyledHeaderTitle = styled.h2<{mTop: number}>`
    font-family:"Press Start 2P";
    color: #fbfbfb;
    font-size: 1.3em;
    margin-top: ${props => props.mTop}em;
`

export const StyledTitleImg = styled.img<{inverse?: boolean}>`
    width:8em;
    transform: ${props => props.inverse ? 'rotate(36deg)' : 'rotate(0deg)'};
`

export const StyledLogo = styled.div<{lado?: string}>`
    display: flex;
    flex-direction:row;
    gap: ${props => props.lado === "derecho" ? '3em' : '1em'};
`

export const StyledButtonLogo = styled.button`
    background: none;
    border:none;
    color: #fbfbfb;
    font-size: 1em;    
    font-family: "Press Start 2P";
    transition: 0.5s ease;
    padding: 3.1em 1em;

    &:hover {
        border-top: outset;
        border-color: #ffff21;
        border-width: 10px;
        color: #e1d254;
        background: #757575;
    }
`

export const StyledCartFrame = styled.div`
    display: relative
`

export const StyledDot = styled.div`
    width:3px;
    border: 3px solid red;
    position: absolute;
    top: 30%;
    left: 46%
`
