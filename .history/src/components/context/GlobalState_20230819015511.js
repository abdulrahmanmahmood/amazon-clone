import { createContext, useContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import {initialState} from "./AppReducer"

const Globalcontext = createContext();

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <Globalcontext.Provider value={{basket:state.basket, user:state.user, dispatch:}}>
    {children}
  </Globalcontext.Provider>;
};

export default GlobalProvider;

export const useAuth = ()=>{
  return useContext(Globalcontext);
}
