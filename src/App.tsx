import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Support from './pages/support/support';
import Login from './pages/login/login';
import { StyledHeaderContainer, StyledTitle, StyledLogo, StyledTitleImg, StyledButtonLogo } from './styledC/Header';
import { Footer, FooterArea, FooterLinks, FooterThings, StyledLinkFooter } from './styledC/Footer';
import { useState } from 'react';


function App() {

  const [login, setLogin] = useState(false);

  const openLoginForm = () => setLogin(true)
  const closeLoginForm = () => setLogin(false);

  return (
    <Router>
      {login && <Login closeLoginForm={closeLoginForm}/>}
      <div className="mainContainer">
        <StyledHeaderContainer> 
          <StyledLogo>
            <StyledTitleImg src="pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"></StyledTitleImg>
            <StyledTitle>Minijuegos TX</StyledTitle>
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