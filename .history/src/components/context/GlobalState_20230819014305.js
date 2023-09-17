import { createContext } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
const [state, dispatch] = useReducer(first, second, third)  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
