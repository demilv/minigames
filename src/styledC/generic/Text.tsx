import { styled } from "styled-components";

export const StyledTitle = styled.h2`
    font-size: 1.9em;
    font-family:"Press Start 2P";
    color:rgb(106, 0, 0);
    margin-bottom:2em;
`

export const StyledGenericTitleProfile = styled.h5`
    font-size: 1.2em;
    font-family:"Press Start 2P";
    color:rgb(220, 220, 220);    
`

export const StyledNothing = styled.h5<{mTop?: number; mBottom?: number}>`
    color: #e1d254;
    font-size: 1.2em;
    font-family:"Press Start 2P";
    margin: 0 auto;
    margin-top: ${props => props.mTop ? `${props.mTop}` : '0'};
    margin-bottom: ${props => props.mBottom ? `${props.mBottom}em` : '5em'}    
`