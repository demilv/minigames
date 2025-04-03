import { useState } from "react"
import { StyledCajas } from "../../styledC/generic/Boxes"
import { StyledMain } from "../../styledC/generic/Screens"
import { StyledTitle } from "../../styledC/generic/Text"
import { WhiteForm, ErrorText } from "../../styledC/newUser/newUser"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { MUIButtonSuccess } from "../../styledC/generic/MUIButtons"

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
        const newUserPath = `${import.meta.env.VITE_MIAPI}/users/newUser`;
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
            if (value.length <3 || value.length > 15)
              setRules(prevRules => ({ ...prevRules, rule1: false }));
            else setRules(prevRules => ({ ...prevRules, rule1: true }));
            return;
          case 'pass':
            if (value.length <3 || value.length > 15)
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
          case 'phone':{
            if (!/^\d{9}$/.test(value)) {
                setRules(prevRules => ({ ...prevRules, rule4: false }));
            } else {
                setRules(prevRules => ({ ...prevRules, rule4: true }));
            }
            return;
          }
        }
    }

    return (
        <StyledMain>
            <WhiteForm onSubmit={submitForm}>
                <StyledTitle>Create your account</StyledTitle>
                <StyledCajas type="name" id="name" name="name" placeholder="Introduce Tu Nombre" onChange={changeData}></StyledCajas>
                {rules.rule1 === false && <ErrorText mTop={1.5}>El nombre debe tener entre 3 y 15 carácteres</ErrorText>}
                <StyledCajas mTop={2} type="password" id="pass" name="pass" placeholder="Introduce Tu Password" onChange={changeData}></StyledCajas>
                {rules.rule2 === false && <ErrorText mTop={1.5}>La password debe tener entre 3 y 15 carácteres</ErrorText>}
                <StyledCajas mTop={2} type="email" id="email" name="email" placeholder="Introduce tu email" onChange={changeData}></StyledCajas>
                {rules.rule3 === false && <ErrorText mTop={1.5}>El email debe tener una terminación correcta</ErrorText>}
                <StyledCajas mTop={2} mBottom={1.5} type="phone" id="phone" name="phone" placeholder="Introduce tu teléfono" onChange={changeData}></StyledCajas>
                {rules.rule4 === false && <ErrorText mBottom={3.5}>El teléfono debe tener 9 números</ErrorText>}
                <MUIButtonSuccess type="submit"> Crear</MUIButtonSuccess>
            </WhiteForm>
        </StyledMain>
    )
}

export default NewUser