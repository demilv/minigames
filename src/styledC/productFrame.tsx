import styled from "styled-components";

export const ProductFrame = styled.div<{inverse?: boolean, back: string}>`
    height:30em;
    width: 100%;
    background-image: ${props => `url(${props.back})`};
    display: flex;
    justify-content: ${props => props.inverse ? 'flex-end' : 'start'};
    justify-content: space-between;
    align-items:center;

`
