import './App.css';
import {Routes , Route} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/' element={<Header/>}/>
        <Route  path='*' element={<h1>Page Not Found</h1>}/>
        <Route  path='/login' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
