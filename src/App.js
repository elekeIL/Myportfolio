import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Fullcontent from  './Screens/Full_content/Fullcontent'
import Home from './Screens/Home/Home'
import { Routes, Route} from 'react-router-dom'
import AboutMe from './Screens/AboutMe/AboutMe'
import Technologies from './Screens/technologies/Technologies'
import Porfolio from './Screens/Porfolio/Portfolio'
import ContactMe from './Screens/Contact/ContactMe'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/portfolio" element={ <Fullcontent /> } />
      <Route path="/about" element={ <AboutMe /> } />
      <Route path="/technologies" element={ <Technologies /> } />
      <Route path="/projects" element={ <Porfolio /> } />
      <Route path="/contact" element={ <ContactMe /> } />
    </Routes>
    </div>
  );
}

export default App;
