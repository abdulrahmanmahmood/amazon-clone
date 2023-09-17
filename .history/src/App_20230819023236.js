import {React, useEffect} from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import { auth } from './firebase';


function App() {
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        
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
