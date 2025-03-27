import { MUIButtonSuccess } from "../../styledC/generic/MUIButtons";
import { StyledLoginCajas, StyledLoginDiv, StyledLoginFirstHalf, StyledLoginSecondHalf, StyledLoginTitle ,StyledForm } from "../../styledC/login/login";
import { Close } from "../../styledC/shop/pestañaTrial";
import { FormData as Form } from "../../features/types/interfaces";
import { useLocation } from "react-router-dom";
import { useState } from "react";


interface login {
    closeLoginForm: () => void;
    loginUser: (formData: Form, prevRoute?: string | null) => Promise<void>
}

interface userData {
    name: string,
    pass: string
}



const Login: React.FC<login> = ({closeLoginForm, loginUser}) => {
    const location = useLocation()
    const { state } = location
    const [formData, setFormData] = useState<userData>({name: "", pass: ""})

    const changeData = (ev: React.ChangeEvent<HTMLInputElement>) => {        
        const {name, value} = ev.target;
        setFormData ({...formData, [name]: value})
    }

    const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        console.log("probando datos")
        loginUser(formData, state ? state.prevRoute : null)
        closeLoginForm()
    }

    return (        
        <StyledForm onSubmit={submitForm}>
            <Close onClick={closeLoginForm} src="X.png"/>            
            <StyledLoginDiv>
                <StyledLoginFirstHalf src="juegosLogin.png"></StyledLoginFirstHalf>
                <StyledLoginSecondHalf>
                    <StyledLoginTitle> Logueate aquí</StyledLoginTitle>
                    <StyledLoginCajas type="name" id="name" name="name" placeholder="Nombre" onChange={changeData}></StyledLoginCajas>
                    <StyledLoginCajas type="password" id="pass" name="pass" placeholder="Password" onChange={changeData}></StyledLoginCajas>
                    <MUIButtonSuccess type="submit"> Access</MUIButtonSuccess>
                </StyledLoginSecondHalf>
            </StyledLoginDiv>
        </StyledForm>
    )
}

export default Login;