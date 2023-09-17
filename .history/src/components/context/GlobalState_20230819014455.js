import { Children, createContext, useReducer, useState } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <Globalcontext.Provider value="">
    {Children}
  </Globalcontext.Provider>;
};

export default GlobalProvider;
