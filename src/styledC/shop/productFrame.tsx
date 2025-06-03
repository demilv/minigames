import styled, { keyframes } from "styled-components";

const movementAnimation = keyframes`
  0% { padding-bottom: 0; }
  50% { padding-bottom: 1em; }
  100% { padding-bottom: 0; }
`;

export const StyledProductFrame = styled.div<{inverse?: boolean, back: string}>`
    height:50em;
    width: 100%;
    display: flex;
    justify-content: ${props => props.inverse ? 'flex-end' : 'start'};
    align-items:center;
    position: relative;
    overflow:hidden;
    border-radius: 1em;
    margin-bottom: 2em;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: ${props => `url(${props.back})`};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        z-index:0;
        transform: ${props => props.inverse ? 'scaleX(-1)' : 'none'}; 
    }

`

export const StyledLadoInfo = styled.div`
    z-index:1;
    margin: 5% 0 0 0;
    padding: 8em 3em 0 3em;
    height:70%;
    min-width:20em;    
    width:30%;
    background-color:#252525;
    background: linear-gradient(
        #252525 0%,       /* Color de fondo */
        #353535 50%,      /* Tonalidad intermedia en el centro */
        #e59866 75% /* Brillo en la esquina superior derecha */
    ); 
    opacity:70%;
    transition: 0.3s ease;
    border-radius: 1em;
    &:hover{
        opacity:100%;
    }    
`

export const StyledTitleProduct = styled.h1`
    font-size:3.5em;
    color: #fbdfcd;
    font-family: "VT323";
    margin-bottom:2em;
`

export const StyledQuickDescription = styled.h5<{inverse?: boolean}>`
    font-size:1.5em;
    font-family: "VT323";
    color: #323232;
    margin-bottom:1.5em;
    text-align: ${props => props.inverse ? 'left' : 'right'};
`
export const StyledInstructionsDiv = styled.div<{inverse?: boolean}>` 
    border: none;   
    margin: 2em 0 0 0;    
    margin-right: ${props => props.inverse ? '0' : '3em'};
    margin-left: ${props => props.inverse ? '3em': '0'};
    display:flex;
    flex-direction:column;   
    z-index:9;
    animation: ${movementAnimation} 4s linear infinite;
    padding-left: ${props => props.inverse ? '0' : '22%'}
`

export const StyledSITitle= styled.h4`
    font-size:2.5em;
    font-family: "VT323";    
    color: #323232;
    margin-bottom: 0.3em;
`

export const StyledSIImg = styled.img`
    margin: 0 auto;
    cursor:pointer;
    width:4em;
    height:4em;
`

export const StyledPageButton = styled.button`
    min-width:1.5em;
    min-height:1.5em;
    padding: 0.3em;
    color: #e59866;
    background-color:#252525
`

export const StyledFrameButtons = styled.div`
    min-width: 15em;
    min-height:2.5em;
    padding:0.2em;
    background-color:#252525;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:1em
`