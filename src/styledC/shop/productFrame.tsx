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
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: ${props => `url(${props.back})`};
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
        transform: ${props => props.inverse ? 'scaleX(-1)' : 'none'}; 
        z-index: 1;
    }

`
