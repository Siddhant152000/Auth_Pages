import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {

  

  return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Signup/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App


