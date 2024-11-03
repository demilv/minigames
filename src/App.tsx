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
              <h2></h2>
              <h4></h4>
            </div>
            <div>
          
            </div>
            <div>

            </div>
          </div>

          <div className='footerInferior'>

          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;