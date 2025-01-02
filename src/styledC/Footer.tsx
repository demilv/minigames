import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Footer = styled.div`
    background-color:rgb(14, 13, 13);
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4em;
    height:20em;
`

export const FooterArea = styled.div<{part?:boolean}> `
    display:flex;
    flex-direction: row;
    column-gap: 10em;
    width: ${props => props.part ? '20%' : '80%'};
`

export const FooterThings = styled.div `
    width: 9em;
    row-gap:2.5em;
    display:flex;
    flex-direction:column
`

export const FooterLinks = styled.h5<{title?:boolean}>`    
    color:rgb(222, 206, 206);
    font-size: ${props => props.title ? '1.3em' : '0.9em'};
    font-family: 'EB Garamond', serif;
`

export const StyledLinkFooter = styled(Link)`
    text-decoration: none;
    color: inherit;
`;