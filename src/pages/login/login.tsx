import { MUIButtonSuccess } from "../../styledC/generic/MUIButtons";
import { StyledTitle } from "../../styledC/Header";
import { StyledLoginCajas, StyledLoginDiv, StyledLoginFirstHalf, StyledLoginSecondHalf } from "../../styledC/login/login";
import { Close, Pestana } from "../../styledC/shop/pestañaTrial";


interface login {
    closeLoginForm: () => void;
}

const Login: React.FC<login> = ({closeLoginForm}) => {

    return (
        <Pestana>
            <Close onClick={closeLoginForm} src="X.png"/>            
            <StyledLoginDiv>
                <StyledLoginFirstHalf src="juegosLogin.png"></StyledLoginFirstHalf>
                <StyledLoginSecondHalf>
                    <StyledTitle mTop={5}> Logueate aquí</StyledTitle>
                    <StyledLoginCajas placeholder="Nombre"></StyledLoginCajas>
                    <StyledLoginCajas placeholder="Password"></StyledLoginCajas>
                    <MUIButtonSuccess/>
                </StyledLoginSecondHalf>
            </StyledLoginDiv>
        </Pestana>
    )
}

export default Login;