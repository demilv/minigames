import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Support from './pages/support/support';
import Login from './pages/login/login';
import { StyledHeaderContainer, StyledTitle, StyledLogo, StyledTitleImg, StyledButtonLogo } from './styledC/Header';


function App() {

  return (
    <Router>
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
            <Link to='/logIn'><StyledButtonLogo>Log In</StyledButtonLogo></Link>
          </StyledLogo>
        </StyledHeaderContainer>

        <div className="body">
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/support' element={<Support />}></Route>
            <Route path='/logIn' element={<Login />}></Route>
          </Routes>          
        </div>       

        <FooterArea>

        </FooterArea>
      </div>

      
    </Router>
  )
}

export default App;