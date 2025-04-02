import { useState } from "react"
import { StyledCajas } from "../../styledC/generic/Boxes"
import { StyledMain } from "../../styledC/generic/Screens"
import { StyledTitle } from "../../styledC/generic/Text"
import { WhiteForm, ErrorText } from "../../styledC/newUser/newUser"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

interface newUserData {
    name: string,
    pass: string,
    email: string,
    phone: string
}
interface rules{
  rule1?: boolean,
  rule2?: boolean,
  rule3?: boolean,
  rule4?: boolean
}

const NewUser = () => {

    const [formData, setFormData] = useState<newUserData>({name: '', pass: '', email:'', phone:''})
    const [rules, setRules] = useState<rules>({rule1: undefined, rule2: undefined, rule3: undefined, rule4: undefined })

    const navigate = useNavigate()

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        if (!Object.values(rules).every(rule => rule)) {
          Swal.fire({
              title: "Error",
              text: "Asegurate de que todos los campos son correctos.",
              icon: "error",
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: true
          });
          return;
      }

        console.log("probando datos")
        const newUserPath = `${import.meta.env.VITE_MIAPI}/newUser`;
        const token = localStorage.getItem('authorization');

        const response = await fetch(newUserPath, {
            method: 'POST',
            headers: {
              'authorization': `Bearer ${token}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              pass: formData.pass,
              email: formData.email,
              phone: formData.phone
            }),
          });
      
          if (!response.ok) {
            console.log('Error en las credenciales');
            return;
          }

          Swal.fire({
            title: "Good job!",
            text: "¡Usuario creado!",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: true
            }).then(() => {
                navigate("/");
            });
    }

    const changeData = async (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = ev.target;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setFormData ({...formData, [name]: value})
        switch (name)
        {
          case 'name':
            if (name.length <3 || name.length > 15)
              setRules(prevRules => ({ ...prevRules, rule1: false }));
            else setRules(prevRules => ({ ...prevRules, rule1: true }));
            return;
          case 'pass':
            if (name.length <3 || name.length > 15)
              setRules(prevRules => ({ ...prevRules, rule2: false }));
            else setRules(prevRules => ({ ...prevRules, rule2: true }));
            return;
          case 'email':
            if (!emailRegex.test(value)) {
              setRules(prevRules => ({ ...prevRules, rule3: false }));
            } else {
              setRules(prevRules => ({ ...prevRules, rule3: true }));
            }
            return;
          case 'phone':
          if (name.length !== 9)
            setRules(prevRules => ({ ...prevRules, rule4: false }));
          else setRules(prevRules => ({ ...prevRules, rule4: true }));
          return;
        }
    }

    return (
        <StyledMain>
            <WhiteForm onSubmit={submitForm}>
                <StyledTitle>Create your account</StyledTitle>
                <StyledCajas type="name" id="name" name="name" placeholder="Introduce Tu Nombre" onChange={changeData}></StyledCajas>
                {!rules.rule1 && <ErrorText>El nombre debe tener entre 3 y 15 carácteres</ErrorText>}
                <StyledCajas type="password" id="pass" name="pass" placeholder="Introduce Tu Password" onChange={changeData}></StyledCajas>
                {!rules.rule1 && <ErrorText>La password debe tener entre 3 y 15 carácteres</ErrorText>}
                <StyledCajas type="email" id="email" name="email" placeholder="Introduce tu email" onChange={changeData}></StyledCajas>
                {!rules.rule1 && <ErrorText>El email debe tener una terminación correcta</ErrorText>}
                <StyledCajas type="phone" id="phone" name="phone" placeholder="Introduce tu teléfono" onChange={changeData}></StyledCajas>
                {!rules.rule1 && <ErrorText>El teléfono debe tener 9 caracteres</ErrorText>}
            </WhiteForm>
        </StyledMain>
    )
}

export default NewUser