import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fullcontent from  './Screens/Full_content/Fullcontent'
import Home from './Screens/Home/Home'
import {Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/portfolio" element={ <Fullcontent /> } />
    </Routes>
    </div>
  );
}

export default App;
