import Typed from "typed.js";
import { useEffect, useRef } from "react";
import './Home.css'
import { greeting } from '../Header/Greeting'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function Home() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['My name is Eleke Lawrence', 'I am an Electrical Engineer', 'And a Full-stack Web Developer.....'], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 70,
      backSpeed: 80,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className= 'home_container'>
      <div>
      <h1> {greeting} <span>☺</span> </h1> 
      <h2> welcome to my website </h2>

      {/* Element to display typing strings */}
      <span className='dym_txt' ref={el}></span>
     </div>
     <Button>
     <Link className='Main_page_link' to="/portfolio">Portfolio</Link>
     </Button>
     <p> Click on the link below to be taken to my portfolio webpage </p>
    </div>
  );
}
export default Home