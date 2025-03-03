import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Support from './pages/support/support';
import Login from './pages/login/login';
import { StyledHeaderContainer, StyledTitle, StyledLogo, StyledTitleImg, StyledButtonLogo } from './styledC/Header';
import { Footer, FooterArea, FooterLinks, FooterThings, StyledLinkFooter } from './styledC/Footer';
import { useContext, useEffect, useState } from 'react';
import { LoginAPI } from './validators/LoginAPI';
import { UserContext } from './context/userContext';
import { User as UserClass } from './features/types/interfaces';
import { usersDataSelect, usersErrorSelect,  usersStatusSelect} from './features/userOperations/userSlice';
import { usersThunk } from './features/userOperations/userThunk';
import { AppDispatch } from "./app/store";
import {  useDispatch, useSelector } from "react-redux";


function App() {

  const [login, setLogin] = useState(false);
  const [loginAttempt, setLoginAttempt] = useState(false)
  const [userAccounts, setUserAccounts] = useState<UserClass[]>([])

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
      }
      login();
    }, []);

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
              console.log(userAccounts)
            } else if (usersStatus === "rejected") {
              console.log(usersError);
            }
          }
        };
      }, [loginAttempt, userAccounts, usersStatus, usersDataSinMapear, usersError, dispatch]);

  return (
    <Router>
      {login && <Login closeLoginForm={closeLoginForm}/>}
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
            <StyledButtonLogo onClick={openLoginForm}>Log In</StyledButtonLogo>
          </StyledLogo>
        </StyledHeaderContainer>

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
    </Router>
  )
}

export default App;