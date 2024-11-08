import styled from "styled-components";

export const HeaderContainer= styled.div`
    height:10em;
    width: 100%;
    background-color: #1c1c1c;
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    padding: 0 4em;
    align-items:center;
`

export const Title = styled.h2`
    font-family:"Press Start 2P";
    color: #fbfbfb;
    font-size: 1.3em;
    margin-top:2.6em
`

export const TitleImg = styled.img<{inverse?: boolean}>`
    width:8em;
    transform: ${props => props.inverse ? 'rotate(45deg)' : 'rotate(0deg)'};
`

export const Logo = styled.div`
    display: flex;
    flex-direction:row;
    gap: 1em;
`
