import { createContext,useReducer,useState } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
const [state, dispatch] = useReducer(AppReducer, inint);

  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
