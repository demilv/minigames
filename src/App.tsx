import { Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import Shop from './pages/shop/shop';
import Support from './pages/support/support';
import Login from './pages/login/login';
import { StyledHeaderContainer, StyledHeaderTitle, StyledLogo, StyledTitleImg, StyledButtonLogo, StyledCartFrame, StyledDot } from './styledC/Header';
import { Footer, FooterArea, FooterLinks, FooterThings, StyledLinkFooter } from './styledC/Footer';
import { useContext, useEffect, useState } from 'react';
import { LoginAPI } from './validators/LoginAPI';
import { UserContext } from './context/userContext';
import { User as UserClass, Game as GameClass, FormData as Form } from './features/types/interfaces';
import { usersDataSelect, usersErrorSelect,  usersStatusSelect} from './features/userOperations/userSlice';
import { gamesDataSelect, gamesErrorSelect, gamesStatusSelect } from './features/gameOperations/gameSlice';
import { usersThunk } from './features/userOperations/userThunk';
import { gamesThunk } from './features/gameOperations/gameThunk';
import { AppDispatch } from "./app/store";
import {  useDispatch, useSelector } from "react-redux";
import VersionWarning from './pages/version/versionWarning';
import { PrivateRoutes } from './AuthProvider/PrivateRoutes';
import Profile from './pages/profile/profile';
import NewUser from './pages/newUser/newUser';
import { BsCart } from 'react-icons/bs';
import Cart from './pages/cart/cart';



function App() {

  const navigate = useNavigate()

  const [login, setLogin] = useState(false);
  const [warning, setWarning] = useState(true);
  const [loginAttempt, setLoginAttempt] = useState(false)
  const [userAccounts, setUserAccounts] = useState<UserClass[]>([])
  const [games, setGames] = useState<GameClass[]>([])
  const [initialLoad, setInitialLoad] = useState(true) 
  const [cart, setCart] = useState<string[]>([])


  const dispatch = useDispatch<AppDispatch>();
  const gamesDataSinMapear = useSelector(gamesDataSelect)
  const gamesError = useSelector(gamesErrorSelect)
  const gamesStatus = useSelector(gamesStatusSelect)
  const usersDataSinMapear = useSelector(usersDataSelect)
  const usersError = useSelector(usersErrorSelect)
  const usersStatus = useSelector(usersStatusSelect)
  const openLoginForm = () => setLogin(true)
  const closeLoginForm = () => setLogin(false);
  const userContext = useContext(UserContext);

  useEffect(() => {    
    const storedCart = localStorage.getItem('cart');
    if (storedCart)
    {
      setCart(JSON.parse(storedCart))
    }
  }, [])
  
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
        if (games.length === 0){
          if(gamesStatus === "idle"){
            dispatch(gamesThunk())
          }else if(gamesStatus === "fulfilled"){
            const gamesDataMap: GameClass[] = [];
            gamesDataSinMapear.forEach((game) => {
              const añadirGame: GameClass = {
                _id: game._id,
                name: game.name,
                bImage: game.bImage,
                price: game.price,
                status: game.status
              };
              gamesDataMap.push(añadirGame)
            })
            setGames(gamesDataMap);
            console.log(gamesDataMap)
          } else if (gamesStatus === "rejected") {
            console.log(gamesError);
          }
        }
      }, [dispatch,  gamesDataSinMapear, gamesError, gamesStatus, games])

      const addItemCart = (game_id: string) => {
        setCart((prevCart) => {
          if(prevCart.includes(game_id)){
            return prevCart;
          }
          return [...prevCart, game_id]        
        })
      }

      const removeItemCart = (id: string) => {
        setCart(prevCart => prevCart.filter(gameId => gameId !== id));
      }

      const removeAllItemCart = () => {
        setCart([])
      }

      const addGameToUser = (id:string) => {
        const addGamesToUser = `${import.meta.env.VITE_MIAPI}/users/upUser`;
        const token = localStorage.getItem('authorization');
        console.log(userContext)
        /*const userResponse = {...userContext, owned:[]
        console.log(userResponse)*/

        /*const response = await fetch(addGamesToUser, {
          method: 'PUT',
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
        });*/
      }
    
      const userProfile = () => {        
        navigate(`/profile/${userContext?.state.user.name}`)
      };

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
          const { email, pass, name, owned } = existsUser;
          if (userContext) {
            userContext.dispatch({ type: 'SET_USERDATA', payload: { email, pass, name, owned } });
            localStorage.setItem('user', JSON.stringify({ email, pass, name, owned }));
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

      const newUser = () => {
        navigate("/newUser")
      }

      const renderAuthSection = () => {
        if (!userContext?.state.user.autenticado) {
          return <StyledButtonLogo onClick={openLoginForm}>Log In</StyledButtonLogo>;
        } else {
          return <>
            <StyledButtonLogo onClick={userProfile}>Profile</StyledButtonLogo>
            <StyledButtonLogo onClick={logout}>Logout</StyledButtonLogo>;
          </>
        }
      };

      const closeWindow = () => {
        setWarning(false)
      }

  if(initialLoad === true){
    return ( <div></div> )
  }else{ 
    return (    
      <>        
        {warning && <VersionWarning closeWindow={closeWindow} />}
        <div className="mainContainer">
          <StyledHeaderContainer> 
            <StyledLogo>
              <StyledTitleImg src="pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"></StyledTitleImg>
              <StyledHeaderTitle mTop={2.6}>Minijuegos TX</StyledHeaderTitle>
              <StyledTitleImg inverse={true} src="pngtree-retro-game-controller-sticker-is-shown-on-a-grey-background-vector-png-image_6903415.png"></StyledTitleImg>
            </StyledLogo>
            <Link to ='/cart'><StyledCartFrame>
              <BsCart size={24}/>
              {cart.length > 0 && <StyledDot></StyledDot>}
            </StyledCartFrame></Link>            
            <StyledLogo lado={"derecho"}>
              <Link to='/'><StyledButtonLogo>Tienda</StyledButtonLogo></Link>
              <Link to ='/support'><StyledButtonLogo>Soporte</StyledButtonLogo></Link>
              {renderAuthSection()}            
            </StyledLogo>
          </StyledHeaderContainer>

          {login && <Login closeLoginForm={closeLoginForm} loginUser={loginUser} newUser={newUser} />}

          <div className="body">
            <Routes>
              <Route path='/' element={<Shop addItemCart={addItemCart}/>}></Route>
              <Route path='/support' element={<Support/>}></Route>
              <Route path='/newUser' element={<NewUser />}></Route>
              <Route path='/cart' element={<Cart addGameToUser = {addGameToUser}removeAllItemCart = {removeAllItemCart} removeItemCart={removeItemCart} cart={cart}/>}></Route>
              {<Route path='/profile/:userId' element={
                <PrivateRoutes>
                  <Profile />
                </PrivateRoutes>
              } />}
               <Route path="*" element={<Navigate to="/" />} />
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