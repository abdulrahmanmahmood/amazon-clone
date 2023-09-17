import { createContext } from "react";


const Globalcontext  = createContext();



const GlobalProvider = () => {

  return( <Globalcontext.Provider>

  </Globalcontext.Provider>)
}

export default GlobalProvider