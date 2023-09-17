import { createContext,useReducer,useState } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
const [state, dispatch] = useReducer();

  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
