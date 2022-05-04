import React from 'react'
import './Header.css'
import { greeting } from './Greeting'
import { Image } from './Greeting'
import Container from 'react-bootstrap/Container'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Footer from '../../Screens/Footer/Footer'
import Button from '@mui/material/Button';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import CodeIcon from '@mui/icons-material/Code';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import StoreIcon from '@mui/icons-material/Store';
import AnimationIcon from '@mui/icons-material/Animation';
import MyEmoji2 from '../../Images/MyEmoji2.png'


function Header() {
  const ed = useRef(null);
const el = useRef(null);

useEffect(() => {
  const typed = new Typed(ed.current, {
    strings: ['Hey there,', 'How are you ?', 'Welcome to my website'], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 300,
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 100,
    fadeOut: true,
    loop: false,
    showCursor: false
  });

  // Destroying
  return () => {
    typed.destroy();
  };
}, []);

useEffect(() => {
  const typed = new Typed(el.current, {
    strings: ['I am Lawrence', 'An Electrical Engineer...',  'Full-stack Web Developer...', 'Machine learning model design specialist...', 'and alround science enthusiast'], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 8500,
    typeSpeed: 70,
    backSpeed: 80,
    backDelay: 100,
    fadeOut: true,
    loop: false,
    showCursor: false
  });

  // Destroying
  return () => {
    typed.destroy();
  };
}, []);
  return (
    <div className='po_container'>
     <div className='effect-wrap'>
      <div className='effect effect 2'>
        <div></div> <div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
     </div>
    <div className='general_container'>
      <Row>
        <div>
        <h1 className='heading'> {greeting} </h1>
        </div>
      </Row>
      <Row>
        <div className='welcome_text'>
          <p ref={ed}></p>
          <h2 ref={el}></h2>
        </div>
      </Row>
      <Row>
        <div className='welcome-img'>
          <div className='welcome-box'>
            <img src={MyEmoji2} alt='animated profile picture'/>
          </div>
        </div>
        <div className='welcome-info' style={{alignContent: 'center'}}>
          <div className='welcome-info-box'>
            <p>In modern literary history, both budding and well-established
authors have used secondary careers as book reviewers to hone their
craft. George Orwell stands out as perhaps the most notable example
with his prolific career as both a book reviewer and author. Analysis
of his critiques of contemporaneous works offers insight into his
belief that his personal world view should be reflected in the writings
of his peers. Unrivaled in his keen insight into the core arguments of
the seminal works of his time, Orwell was adept at pointing out fatal</p>
          </div>
        <Row>
          <div className='more-info'>
           <p>Want to know more about me?</p>
           <p> click on the button below to find out more</p>
            <Button><Link to='/about'>About me</Link></Button>
        </div>
          <div className='get-offer'>
           <p>Want to get in contact with me to discuss a possible job offer?</p>
           <p> please, click on the button below</p>
           <Button><Link to='/contact'>Contact</Link></Button>
        </div>
        </Row>
        </div>
      </Row>
      <Row>
        <div className='service-heading'>
          <h2>Services I offer currently</h2>
        </div>
      </Row>
      <Row>
        <div className='service-containment'>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#4eb7ff'}}><CodeIcon fontSize='large'/></div>
              <div className='content'>
               <h2>Web design and Development</h2>
               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p>
              </div>
            </div>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#fd6494'}}><SmartToyIcon fontSize='large'/></div>
              <div className='content'>
              <h2>AI and Machine Learning models Integration</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p></div>
            </div>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#43f390'}}><AnalyticsIcon fontSize='large'/></div>
              <div className='content'><h2>Data analysis and Visualization</h2><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p></div>
            </div>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#ffb508'}}><VideogameAssetIcon fontSize='large'/></div>
              <div className='content'><h2>Game development</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p></div>
            </div>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#37ba82'}}><AnimationIcon fontSize='large'/></div>
              <div className='content'><h2>3D and 2D character animation</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p></div>
            </div>
            <div className='service-box'>
              <div className='icon' style={{backgroundColor: '#cd57ff'}}><StoreIcon fontSize='large' /></div>
              <div className='content'><h2>Google ads Campaign management</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit. </p></div>
            </div>
      </div>
      </Row>
    </div>

    <Footer />

    </div >
  )
}

export default Header
