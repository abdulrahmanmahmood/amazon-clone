import { createContext } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
