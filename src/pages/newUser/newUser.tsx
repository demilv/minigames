import { useState } from "react"
import { StyledCajas } from "../../styledC/generic/Boxes"
import { StyledMain } from "../../styledC/generic/Screens"
import { StyledTitle } from "../../styledC/generic/Text"
import { WhiteForm } from "../../styledC/newUser/newUser"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2";

interface newUserData {
    name: string,
    pass: string,
    email: string,
    phone: string
}

const NewUser = () => {

    const [formData, setFormData] = useState<newUserData>({name: '', pass: '', email:'', phone:''})

    const navigate = useNavigate()

    const submitForm = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
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
            text: "User added successfully!",
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
        setFormData ({...formData, [name]: value})

    }

    return (
        <StyledMain>
            <WhiteForm onSubmit={submitForm}>
                <StyledTitle>Create your account</StyledTitle>
                <StyledCajas type="name" id="name" name="name" placeholder="Introduce Tu Nombre" onChange={changeData}></StyledCajas>
                <StyledCajas type="password" id="pass" name="pass" placeholder="Introduce Tu Password" onChange={changeData}></StyledCajas>
                <StyledCajas type="email" id="email" name="email" placeholder="Introduce tu email" onChange={changeData}></StyledCajas>
                <StyledCajas type="phone" id="phone" name="phone" placeholder="Introduce tu teléfono" onChange={changeData}></StyledCajas>
            </WhiteForm>
        </StyledMain>
    )
}

export default NewUser