import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Screens/Navigationbar/NavigationBar'
import AboutMe from './Screens/AboutMe/AboutMe'
import Technologies from './Screens/technologies/Technologies'
import Porfolio from './Screens/Porfolio/Portfolio'
import ContactMe from './Screens/Contact/ContactMe'

function App() {
  return (
    <div className="App">
    <NavigationBar/>
    <AboutMe/>
    <Technologies/>
    <Porfolio/>
    <ContactMe/>
    </div>
  );
}

export default App;
