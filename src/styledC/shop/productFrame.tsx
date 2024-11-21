import styled from "styled-components";

export const ProductFrame = styled.div<{inverse?: boolean, back: string}>`
    height:50em;
    width: 100%;
    display: flex;
    justify-content: ${props => props.inverse ? 'flex-end' : 'start'};
    justify-content: space-between;
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

export const LadoInfo = styled.div`
    z-index:1;
    margin: 15% 0 0 2em;
    height:50%;
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
