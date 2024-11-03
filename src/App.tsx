import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Shop from './pages/shop/shop';



function App() {

  return (
    <Router>
      <div className="mainContainer">
        <div className="header">
          <h2 className="title">Minijuegos TX</h2>
          <div className="menuButtons">
            <Link to='/'><button>Tienda</button></Link>
            <Link to ='/support'><button>Soporte</button></Link>
            <Link to='/logIn'><button>Log In</button></Link>
          </div>
        </div>

        <div className="body">
          <Routes>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/' element={<Shop />}></Route>
            <Route path='/' element={<Shop />}></Route>
          </Routes>          
        </div>

        <div className="footer">
          <div className='footerSuperior'>
            <div className='footerSuperior_left'>
              <img />
              <h2></h2>
              <h4></h4>
            </div>
            <div>
              <h3>About Us</h3>
              <p></p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <img />
              <img />
              <img />
            </div>            
          </div>

          <div className='footerInferior'>
            <p> All Rights Reserved bla bla bla</p>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;