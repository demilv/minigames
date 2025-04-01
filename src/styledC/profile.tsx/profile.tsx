import styled from "styled-components";

export const StyledTitleProfile = styled.h3`
    color: #e1d254;
    font-size: 2em;
    font-family:"Press Start 2P";
    margin-bottom: 0.3em;
    position:absolute;
    left:5%;
    top:-2%
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
    margin-top:1.5em;    
    border: 1px solid rgb(239, 239, 239);
`

export const StyledGameRowProfile = styled.div<{mHeight?: number}>`
    display:flex;
    flex-direction:row;
    padding-left: 10%;
    margin-bottom:3em;
    min-height: ${props => props.mHeight ? `${props.mHeight}em` : '0'};
`
export const StyledGameTitleRowProfile = styled.div`
    display: flex;
    flex-direction: column;    
    border-radius: 1em;
    padding-top: 5%;
    background-color: rgb(41, 65, 162);
    border: 1px solid #888;
    box-shadow: inset 2px 2px 5px rgba(255, 255, 255, 0.5),
                inset -2px -2px 5px rgba(255, 0, 0, 0.5),
                3px 3px 5px rgba(255, 255, 255, 0.3);`

export const StyledGameSpaceProfile = styled.div`
    display: flex;
    flex-direction: column;
    width:25%;    
    align-items: center;
    text-align: center; 
    background-color: rgb(3, 2, 2);   
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    min-height: 31em
`

export const StyledGameImgProfile = styled.img`
    max-width:100%;
    margin-bottom:2em;
    border-radius: 1em;
`

export const StyledGameTitleProfile = styled.h5`
    font-size: 1.2em;
    font-family:"Press Start 2P";
    color:rgb(220, 220, 220);    
`

export const GamesContainer = styled.div`
    position:relative;
    margin-top:2em    
`

