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
                <StyledLoginFirstHalf src="juegosLogin.jpg"></StyledLoginFirstHalf>
                <StyledLoginSecondHalf>
                    <StyledTitle> Logueate a nuestra página</StyledTitle>
                    <StyledLoginCajas></StyledLoginCajas>
                </StyledLoginSecondHalf>
            </StyledLoginDiv>
        </Pestana>
    )
}

export default Login;