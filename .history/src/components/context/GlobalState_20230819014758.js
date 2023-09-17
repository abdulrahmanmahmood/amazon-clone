import { createContext, useContext, useReducer, useState } from "react";
import ap

const Globalcontext = createContext();

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <Globalcontext.Provider value={{}}>
    {children}
  </Globalcontext.Provider>;
};

export default GlobalProvider;

export const useAuth = ()=>{
  return useContext(Globalcontext);
}
