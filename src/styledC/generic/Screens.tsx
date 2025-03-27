import styled from "styled-components"

export const BlackScreen = styled.div`
    position:fixed;
    z-index:9999999999;
    width: 100%;
    height:100%;
    padding: 2em 5em;
    background-color:black;
    opacity: 80%;
`

export const StyledMain = styled.div<{mTop?: number}>`
    width:100%;
    align-items:center;
    padding: 6%;
    padding-top: ${props => props.mTop ? `${props.mTop}%` : '6%'};
    min-height: ${props => props.mTop ? '55em' : '0'};
    background-color: #1c1c1c 
`