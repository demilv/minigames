import styled from "styled-components"

export const Close = styled.img<{mTop?:number; mLeft?:number}>`
    position: fixed;
    z-index: 10000000;
    width: 6%;
    height:5%;
    margin-left:${props => props.mLeft ? `${props.mLeft}%` : `81%`};
    margin-top: ${props => props.mTop ? `${props.mTop}em` : `1.5em`};
    cursor:pointer;
    z-index:99999999999999999999
`