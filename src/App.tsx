import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Support from './pages/support/support';
import Login from './pages/login/login';
import { StyledHeaderContainer, StyledTitle, StyledLogo, StyledTitleImg, StyledButtonLogo } from './styledC/Header';
import { Footer, FooterArea, FooterLinks, FooterThings, StyledLinkFooter } from './styledC/Footer';
import { useContext, useEffect, useState } from 'react';
import { LoginAPI } from './validators/LoginAPI';
import { UserContext } from './context/userContext';
import { User as UserClass, FormData as Form } from './features/types/interfaces';
import { usersDataSelect, usersErrorSelect,  usersStatusSelect} from './features/userOperations/userSlice';
import { usersThunk } from './features/userOperations/userThunk';
import { AppDispatch } from "./app/store";
import {  useDispatch, useSelector } from "react-redux";


function App() {

  const navigate = useNavigate()

  const [login, setLogin] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false)
  const [userAccounts, setUserAccounts] = useState<UserClass[]>([])
  const [initialLoad, setInitialLoad] = useState(true) 

  const dispatch = useDispatch<AppDispatch>();
  const usersDataSinMapear = useSelector(usersDataSelect)
  const usersError = useSelector(usersErrorSelect)
  const usersStatus = useSelector(usersStatusSelect)
  const openLoginForm = () => setLogin(true)
  const closeLoginForm = () => setLogin(false);
  const userContext = useContext(UserContext);

  useEffect(() => {
    const login = async () => {
        await LoginAPI();
        const storedUser = localStorage.getItem('user');
        if (storedUser && userContext) {
          userContext.dispatch({ type: 'SET_USERDATA', payload: JSON.parse(storedUser) });
        }
        console.log(userContext?.state);
        setLoginAttempt(true)
        setInitialLoad(false)
      }

      if (!loginAttempt) {
        login();
      }
    }, [loginAttempt, userContext]);



    useEffect(() => {
      if(loginAttempt){
          if (userAccounts.length === 0) {
            if (usersStatus === "idle") {
              dispatch(usersThunk());
            } else if (usersStatus === "fulfilled") {
              const usersDataMap: UserClass[] = [];
              usersDataSinMapear.forEach((user) => {
                const añadirUser: UserClass = {
                  _id: user._id,
                  name: user.name,
                  phone: user.phone,
                  email: user.email,
                  pass: user.pass,
                  owned: user.owned
                };
                usersDataMap.push(añadirUser);
              });
              setUserAccounts(usersDataMap);
              console.log(usersDataMap)
            } else if (usersStatus === "rejected") {
              console.log(usersError);
            }
          }
        };
      }, [loginAttempt, userAccounts, usersStatus, usersDataSinMapear, usersError, dispatch]);

      useEffect(() => {
        if (login) {
          console.log(login)
        }
      }, [login])

      useEffect(() => {
        if (loginAttempt) {
          dispatch(usersThunk());
        }
      }, [loginAttempt, dispatch]);

      useEffect(() => {
        console.log("Usuarios actualizados:", userAccounts);
      }, [userAccounts]);
      


      const loginUser = async (formData: Form) => {
        console.log("comenzando login")
        const auth = `${import.meta.env.VITE_MIAPI}/auth`;
        const token = localStorage.getItem('authorization');
        console.log(token)
        console.log(formData)
        const response = await fetch(auth, {
          method: 'POST',
          headers: {
            'authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            pass: formData.pass,
          }),
        });
    
        if (!response.ok) {
          console.log('Error en las credenciales');
          return;
        }
        const data = await response.json();
    
        const existsUser = userAccounts.find((user) => user.name === formData.name);
    
        if (data.success && existsUser) {
          const { email, pass, name } = existsUser;
          if (userContext) {
            userContext.dispatch({ type: 'SET_USERDATA', payload: { email, pass, name } });
            localStorage.setItem('user', JSON.stringify({ email, pass, name }));
            localStorage.setItem("isLogged", "true");
            navigate('/');
          }
        }else {
          if (userContext) {
            userContext.dispatch({ type: 'LOGOUT' });
            localStorage.setItem("isLogged", "false");
          }
        }
      };

      const logout = () =>{
        userContext?.dispatch({type:"LOGOUT"})
        localStorage.removeItem("user");
        localStorage.removeItem("authorization");
        localStorage.setItem("isLogged", "false");
        navigate("/")
      }

      const renderAuthSection = () => {
        if (!userContext?.state.user.autenticado) {
          return <StyledButtonLogo onClick={openLoginForm}>Log In</StyledButtonLogo>;
        } else {
          return <StyledButtonLogo onClick={logout}>Logout</StyledButtonLogo>;
        }
      };

  if(initialLoad === true){
    return ( <div></div> )

  }else{ 
    return (    
      <>
        <div className="mainContainer">
          <StyledHeaderContainer> 
            <StyledLogo>
              <StyledTitleImg src="pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"></StyledTitleImg>
              <StyledTitle mTop={2.6}>Minijuegos TX</StyledTitle>
              <StyledTitleImg inverse={true} src="pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"></StyledTitleImg>
            </StyledLogo>
            <StyledLogo lado={"derecho"}>
              <Link to='/'><StyledButtonLogo>Tienda</StyledButtonLogo></Link>
              <Link to ='/support'><StyledButtonLogo>Soporte</StyledButtonLogo></Link>
              {renderAuthSection()}            
            </StyledLogo>
          </StyledHeaderContainer>

          {login && <Login closeLoginForm={closeLoginForm} loginUser={loginUser} />}

          <div className="body">
            <Routes>
              <Route path='/' element={<Shop />}></Route>
              <Route path='/support' element={<Support />}></Route>
            </Routes>
          </div>    
            
          <Footer>
            <FooterArea>
              <FooterThings>
                <FooterLinks title>Pagina</FooterLinks>
                <StyledLinkFooter to ='/'><FooterLinks>Tienda</FooterLinks></StyledLinkFooter>
                <StyledLinkFooter to ='/support'><FooterLinks>Soporte</FooterLinks></StyledLinkFooter>
                <StyledLinkFooter to='/logIn'><FooterLinks>LogIn</FooterLinks></StyledLinkFooter>
              </FooterThings>
              <FooterThings>
                <FooterLinks title>Elementos legales</FooterLinks>
                <StyledLinkFooter to ='/'><FooterLinks>Copyright</FooterLinks></StyledLinkFooter>
                <StyledLinkFooter to ='/support'><FooterLinks>Settings</FooterLinks></StyledLinkFooter>
                <StyledLinkFooter to='/logIn'><FooterLinks>Contact</FooterLinks></StyledLinkFooter>
              </FooterThings>
            </FooterArea>
            <FooterArea part>
              <FooterLinks title>gonzalo.cano.rodriguez93@gmail.com</FooterLinks>
            </FooterArea>
          </Footer>
        </div>      
      </>    
    )
  }
}

export default App;