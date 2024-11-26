import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/system';

const MUIButtonGroup = styled(ButtonGroup)({
    gap: '0.2em'
});

const MUIButton = styled(Button)({
    backgroundColor: '#353535',
    color: '#fbfbfb',
    '&:hover': {
        color: '#e1d254',
    },

})

export {MUIButton, MUIButtonGroup};