import { createContext, useReducer } from "react";
import React from "react";

  interface User {
    _id:  string | null;
    name: string | null;
    email: string | null;
    pass: string | null;
    phone: string | null;
    owned: string[] | null;
    autenticado: boolean;
  }
  
  interface State {
    user: User;
  }

  interface UserContextProviderProps {
    children: React.ReactNode;
  }
  
  type Action = | { type: 'SET_USERDATA'; payload: { _id: string; name: string; email: string; pass: string; phone: string; owned: string[] } } | { type: 'LOGOUT' };
  
  interface UserContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
  }

const userReducer = (state: State, action:Action) => {
    switch (action.type) {
        case "SET_USERDATA":
            return { ...state, 
                user:{
                        _id: action.payload._id,
                        name:action.payload.name,
                        email: action.payload.email,
                        pass: action.payload.pass,
                        phone: action.payload.phone,
                        owned: action.payload.owned,
                        autenticado: true
                    }};
        case "LOGOUT":
            return {...state, user:{
                _id: null,
                name:null,
                email: null,
                pass: null,
                phone: null,
                owned:null,
                autenticado: false
            }};
                    
        default:
            return state;
    }
}

export const UserContext = createContext<UserContextType | null>(null);

export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
      const [state, dispatch] = useReducer(userReducer, {user:{
      _id: null,
      name:null,
      email: null,
      pass: null,
      phone: null,
      owned: null,
      autenticado: false
  }});

  return (
      <UserContext.Provider value={{state , dispatch}}>
          {children}
      </UserContext.Provider>
  )
}