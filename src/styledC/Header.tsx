import styled from "styled-components";

export const HeaderContainer= styled.div`
    height:8em;
    width: 100%;
    background-color: #1c1c1c;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0 4em;
    align-items:center;    
    position:fixed;
    z-index:9999999;
`

export const Title = styled.h2`
    font-family:"Press Start 2P";
    color: #fbfbfb;
    font-size: 1.3em;
    margin-top:2.6em
`

export const TitleImg = styled.img<{inverse?: boolean}>`
    width:8em;
    transform: ${props => props.inverse ? 'rotate(36deg)' : 'rotate(0deg)'};
`

export const Logo = styled.div<{lado?: string}>`
    display: flex;
    flex-direction:row;
    gap: ${props => props.lado === "derecho" ? '3em' : '1em'};
`

export const ButtonLogo = styled.button`
    background: none;
    border:none;
    color: #e5e5e5;
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
