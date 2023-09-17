import { createContext } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
  const [, set] = useState(initialState);
  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
