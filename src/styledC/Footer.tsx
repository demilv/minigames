import styled from "styled-components";
import { Link } from 'react-router-dom';

export const FooterArea = styled.div `
    background-color:rgb(14, 13, 13);
    height:15em;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    width:100%;
    padding: 0 4em;
`

export const FooterThings = styled.div `
    width: 8em;
    padding-top:3.5em;
    row-gap:2.5em;
    display:flex;
    flex-direction:column
`

export const FooterLinks = styled.h5`
    color:rgb(222, 206, 206);
    font-size: 0.9em;
    font-family: 'EB Garamond', serif;
`

export const StyledLinkFooter = styled(Link)`
    text-decoration: none;
    color: inherit;
`;