import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { keyframes, styled } from '@mui/system';

const rainbowAnimation = keyframes`
  0% { border-color: #ff0000; }
  16% { border-color: #ff7f00; }
  32% { border-color: #ffff00; }
  48% { border-color: #00ff00; }
  64% { border-color: #0000ff; }
  80% { border-color: #4b0082; }
  100% { border-color: #8f00ff; }
`;


const MUIButtonGroup = styled(ButtonGroup)({
    gap: '3em',
    display: 'flex',
    justifyContent: 'center'
});

const MUIButton = styled(Button)({
    backgroundColor: '#353535',
    color: '#fbfbfb',
    padding: '0.9em 2em',
    fontFamily: "'Press Start 2P'",
    '&:hover': {
        color: '#e1d254',
        backgroundOrigin: 'border-box',
        animation: `${rainbowAnimation} 2s infinite linear`,
    },
})

const MUIButtonSuccess= styled(Button)({
    backgroundColor: '#79ff2c',
    height:'3em',
    width: '50%',
    borderRadius: '30px'        
})

export {MUIButton, MUIButtonGroup, MUIButtonSuccess};