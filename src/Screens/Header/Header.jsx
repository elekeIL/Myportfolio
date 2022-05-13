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
import { motion } from "framer-motion"
import 'animate.css';
import Earth3 from '../../Images/Earth3.jpg'
import greentea from '../../Images/green-tea.png'
import grass1 from '../../Images/grass-1.png';
import grass from '../../Images/grass.png'
import flower from '../../Images/flower-pot.png'
import tropics from '../../Images/tropical-leaves.png'


function Header() {
  const ed = useRef(null);
const el = useRef(null);

useEffect(() => {
  const typed = new Typed(ed.current, {
    strings: ['Hey there,', 'How are you ?', 'Welcome to my website'], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 300,
    typeSpeed: 200,
    backSpeed: 80,
    backDelay: 1000,
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
    strings: ['I am Lawrence', 'An Electrical Engineer...',  'Full-stack Web Developer...', 'Machine learning model design specialist...', 'and alround science enthusiast', 'Hope you have a nice time in my site'], // Strings to display
    // Speed settings, try diffrent values untill you get good results
    startDelay: 7200,
    typeSpeed: 200,
    backSpeed: 80,
    backDelay: 500,
    fadeOut: true,
    loop: false,
    showCursor: false
  });

  // Destroying
  return () => {
    typed.destroy();
  };
}, []);

const variants = {
  hidden: {opacity: 0 },
  visible: {oconstpacity: 1 },
}


  return (
    
    <motion.div
    animate="visible"
    variants={variants} className='po_container'>  
    <div style={{marginBottom: '100px'}} className='general_container'>
     <div id='Background' style = {{background: `url(${Earth3})`, height:'100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight:'100%', backgroundSize: 'cover', paddingBottom: '100px'}}>
      <Row style={{marginBottom: '50px'}}>
        <div>
        <h1 style={{marginBottom: '0'}} className='heading animate__lightSpeedInRight'> {greeting} </h1>
        </div>
      </Row>
      <Row>
        <div className='welcome_text'>
          <p ref={ed}></p>
          <h2 style={{paddingLeft: '50px', color: '#ffffff'}}ref={el}></h2>
        </div>
      </Row>
      </div>
      <Row>
        <div className='welcome-img'>
          <div className='welcome-box'  style={{position: 'relative'}}>
          <img id='greentea' src={greentea} alt='grass'/>
          <div  style={{position: 'relative'}}>
            <img src={MyEmoji2} alt='animated profile picture'/>
            </div>
          </div>
        </div>
        <div className='welcome-info' style={{alignContent: 'center'}}>
         <Row>
           <div>
           <div>
             <img id='grass' src={grass} alt='grass'/>
           </div>
             <h3>Brief description</h3>
           </div>
         </Row>
          <div className='welcome-info-box' style={{position: 'relative', lineHeight: '1.5'}}>
          <Row>
            <div>
            <p>In modern literary history, both budding and well-established
authors have used secondary careers as book reviewers to hone their
craft. George Orwell stands out as perhaps the most notable example
with his prolific career as both a book reviewer and author. Analysis
of his critiques of contemporaneous works offers insight into his
belief that his personal world view should be reflected in the writings
of his peers. Unrivaled in his keen insight into the core arguments of
the seminal works of his time, Orwell was adept at pointing out fatal</p>

          </div>
          </Row>
        <img id='grass1' src={grass1} alt='grass'/>
        <Row>
          <div className='more-info'  style={{position: 'relative'}}>
           <div>
           <p>Want to know more about me?</p>
           <p> click on the button below to find out more</p>
            <Button><Link to='/about' className='click'>About me</Link></Button>
           </div>
        </div>
          <div className='get-offer' style={{position: 'relative'}}>
           <p>Want to get in contact with me to discuss a possible job offer?</p>
           <p> please, click on the button below</p>
           <Button><Link to='/contact' className='pulse intouch'>Contact</Link></Button>
        </div>
        </Row>
        </div>
        </div>
      </Row>
      <img id='flower' src={flower} alt='grass'/>
      <Row style={{position: 'relative'}} > 
        <div className='service-heading'>
          <h2>Services I offer currently</h2>
        </div>
      </Row>
      <Row>
      <img id='tropics' src={tropics} alt='grass'/>
      <img id='tropics1' src={tropics} alt='grass'/>
      <img id='tropics' src={tropics} alt='grass'/>
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

    </motion.div>
  )
}

export default Header
