import { createContext, useReducer, useState } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <Globalcontext.Provider value="">
    {children}
  </Globalcontext.Provider>;
};

export default GlobalProvider;
