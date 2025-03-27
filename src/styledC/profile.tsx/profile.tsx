import styled from "styled-components";

export const StyledTitleProfile = styled.h3`
    color: #e1d254;
    font-size: 2em;
    font-family:"Press Start 2P";
    margin-bottom: 0.3em;
    min-width: 30%;    
`

export const StyledNothingProfile = styled.h5`
    color: #e1d254;
    font-size: 1em;
    font-family:"Press Start 2P";
    margin-bottom: 0.3em    
`

export const StyledLineProfile = styled.div`
    display:flex;
    flex-direction:row;
    background-color: transparent;
    height:0%;
    width:100%;
    margin-top:1em;    
    border: 1px solid rgb(239, 239, 239);
`

export const StyledGameRowProfile = styled.div<{mHeight?: number}>`
    display:flex;
    flex-direction:row;
    padding: 0 10%;
    padding-left: ${props => props.mHeight ? '15%' : '10%'};
    margin-bottom:1em;
    min-height: ${props => props.mHeight ? `${props.mHeight}em` : '0'};

`

export const StyledGameSpaceProfile = styled.div`
    display: flex;
    flex-direction: column;
    width:25%;    
`

export const StyledGameImgProfile = styled.img`
    max-width:90%;
    margin-bottom:0.3em
`

export const StyledGameTitleProfile = styled.h5`
    font-size: 0.6em;
    font-family:"Press Start 2P";
    color:rgb(220, 220, 220);
    margin: 0 auto;
`