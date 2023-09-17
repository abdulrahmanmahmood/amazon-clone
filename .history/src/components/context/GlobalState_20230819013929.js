import { createContext } from "react";

const Globalcontext = createContext();

const GlobalProvider = () => {
  const [state, setstate] = useState(initialState);
  return <Globalcontext.Provider value="">

  </Globalcontext.Provider>;
};

export default GlobalProvider;
