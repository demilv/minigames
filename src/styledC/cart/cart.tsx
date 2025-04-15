import styled from "styled-components";

export const StyledCartFrame = styled.div`
    height: 8em;
    width:100%;
    padding: 0 5em;
    display: flex;
    flex-direction:row;
    justify-content:space-between;    
    align-items:center;    
    gap:2em;
    background-color: #7f8c8d;
    box-shadow: 0 2.5rem 3.75rem -1.25rem rgba(192, 192, 192, 0.6)
`

export const StyledCartLeftFrame = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    padding: 5%;
    align-items: center;
    justify-content: center
`

export const StyledCartLeftFrameImg = styled.img`
    width: 90%
`
