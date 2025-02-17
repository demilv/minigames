import { createContext, useReducer } from "react";
import React from "react";

  interface User {
    name: string | null;
    email: string | null;
    pass: string | null;
    autenticado: boolean;
  }
  
  interface State {
    user: User;
  }

  interface UserContextProviderProps {
    children: React.ReactNode;
  }
  
  