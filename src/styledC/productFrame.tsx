import styled from "styled-components";

export const ProductFrame = styled.div<{inverse?: boolean}>`
    height:30em;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: ${props => props.inverse ? 'flex-end' : 'start'};

`
