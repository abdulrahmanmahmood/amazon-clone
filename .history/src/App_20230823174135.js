import {React, useEffect} from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import { auth } from './firebase';
import { useAuth } from './components/context/GlobalState';
import Home from './components/Home';
import Checkout from './components/Checkout';


function App() {
  const {dispatch} = useAuth()
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })
  }, [auth]);
  return (
    <div className="App">
                <Header/>

      <Routes>
        <Route  path='/' element={<>
          <Home/>
        </>}/>
        <Route  path='*' element={<h1>Page Not Found</h1>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;