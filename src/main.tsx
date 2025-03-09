import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./main.css"
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { UserContextProvider } from './context/userContext.tsx'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')

if(rootElement){
    ReactDOM.createRoot(rootElement).render(
      <Provider store={store}>
        <UserContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserContextProvider>
      </Provider>
  )
}
