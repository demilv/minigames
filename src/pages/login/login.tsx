import { MUIButtonSuccess } from "../../styledC/generic/MUIButtons";
import { StyledTitle } from "../../styledC/Header";
import { StyledLoginCajas, StyledLoginDiv, StyledLoginFirstHalf, StyledLoginSecondHalf, StyledForm } from "../../styledC/login/login";
import { Close } from "../../styledC/shop/pestañaTrial";
import { FormData as Form } from "../../features/types/interfaces";
import { useLocation } from "react-router-dom";


interface login {
    closeLoginForm: () => void;
    loginUser: (formData: Form) => Promise<void>
}

interface userData {
    name: string,
    pass: string
}

const Login: React.FC<login> = ({closeLoginForm, loginUser}) => {



    return (        
        <StyledForm onSubmit={loginUser}>
            <Close onClick={closeLoginForm} src="X.png"/>            
            <StyledLoginDiv>
                <StyledLoginFirstHalf src="juegosLogin.png"></StyledLoginFirstHalf>
                <StyledLoginSecondHalf>
                    <StyledTitle mTop={5}> Logueate aquí</StyledTitle>
                    <StyledLoginCajas placeholder="Nombre"></StyledLoginCajas>
                    <StyledLoginCajas placeholder="Password"></StyledLoginCajas>
                    <MUIButtonSuccess> Access</MUIButtonSuccess>
                </StyledLoginSecondHalf>
            </StyledLoginDiv>
        </StyledForm>
    )
}

export default Login;