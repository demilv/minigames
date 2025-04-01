import { StyledCajas } from "../../styledC/generic/Boxes"
import { StyledMain } from "../../styledC/generic/Screens"
import { StyledTitle } from "../../styledC/generic/Text"
import { WhiteForm } from "../../styledC/newUser/newUser"

const NewUser = () => {



    return (
        <StyledMain>
            <WhiteForm onSubmit={submitForm}>
                <StyledTitle>Create your account</StyledTitle>
                <StyledCajas type="name" id="name" name="name" placeholder="Introduce Tu Nombre" onChange={changeData}></StyledCajas>
                <StyledCajas type="password" id="pass" name="pass" placeholder="Introduce Tu Password" onChange={changeData}></StyledCajas>
                <StyledCajas type="name" id="email" name="email" placeholder="Introduce tu email" onChange={changeData}></StyledCajas>
            </WhiteForm>
        </StyledMain>
    )
}

export default NewUser