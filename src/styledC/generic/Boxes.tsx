import styled from "styled-components"

export const StyledCajas = styled.input<{mTop?: number, mBottom? :number}>`
    border-radius:30px;
    border: 1px solid;
    height: 3.5em;
    text-align:center;
    width:50%;
    margin: ${props => props.mTop ? `${props.mTop}%` : '0%'} 0 ${props => props.mBottom ? `${props.mBottom}em` : `0`} 0   
`