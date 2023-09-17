import {React, useEffect} from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import { auth } from './firebase';
import { useAuth } from './components/context/GlobalState';


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
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Header/>}/>
        <Route  path='*' element={<h1>Page Not Found</h1>}/>
        <Route  path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
