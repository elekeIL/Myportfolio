import Typed from "typed.js";
import React from 'react'
import { useEffect, useRef } from "react";
import './Home.css'
import { greeting } from '../Header/Greeting'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

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
    <div className='home_container'>
      <div className='square'></div>
       <div className='square'></div>
        <div className='square'></div>
           <div className='square'></div>
             <div className='square'></div>
               <div className='square'></div>
                  <div className='square'></div>
                   <div className='square'></div>
                     <div className='square'></div>
      
      <div>
        <h1> {greeting} <span>☺</span> </h1>
        <h2> welcome to my website </h2>

        {/* Element to display typing strings */}
        <span className='dym_txt' ref={el}></span>
      </div>
      <div className='social'>
        <a href='https://twitter.com/IheanyiEleke' target='blank' alt='twitter'><TwitterIcon/></a>
        <a href='https://github.com/elekeIL' target='blank' alt='GitHub'><GitHubIcon/></a>
        <a href='https://www.linkedin.com/in/iheanyi-eleke/' target='blank' alt='linkedin'><LinkedInIcon/></a>
        <a href='tel:+2347051156720' target='blank' alt='phone number'><PhoneIcon/></a>
      </div>
      <div className='button'>
      <Button>
        <Link className='Main_page_link' to="/portfolio">Portfolio</Link>
      </Button>
      <p> Click on the link below to be taken to my portfolio webpage </p>
      </div>
    </div>
  );
}
export default Home