import React from 'react'
import './Technologies.css'
import DevIcon from 'devicon-react-svg'
import { techs } from '../../Helpers/techs'
import { frameworks } from '../../Helpers/frameworks'
import laptop2 from '../../Images/laptop2.png'
import vine3 from '../../Images/vine3.png'
import vine5 from '../../Images/vine5.png'
import vine6 from '../../Images/vine6.png'
import eye from '../../Images/eye.png'
import face from '../../Images/face.png'
import Container from 'react-bootstrap/Container'
import Navigation from '../../Screens/Navigation/Navigation'
import Footer from '../../Screens/Footer/Footer'


function Technologies() {
  return (
    <div id='technologies'>
      <Navigation />
      <img className='grapes' src={vine3} alt='vine'/>
      <img className='vine_5' src={vine5} alt='vine'/>
      <img className='vine_61' src={vine6} alt='vine'/>
      <img className='grapes3' src={vine3} alt='vine'/>
      <img className='grapes1' src={vine3} alt='vine'/>
      <Container className='technologies_container'>
        <div className='tech_heading'>
          <h1 style={{ textAlign: 'center' }}> Programming skills and Frameworks </h1>
        </div>
        
        <div className='lng'>
        <img className='bg_img' src={laptop2} alt='background'/>
          <h2> Programming Languages</h2>
        </div>
        <div>
          <Container className='tech_cards_container'>
            {techs.map((e, idx) => {
              return (<div key={idx} className='techcard'>
              <img className='tech_icon' src={e.src} alt='program logo'/>
                <span style={{ margin: '5px', fontSize: '1.5rem' }}>{e.name}</span>
              </div>)
            })}
          </Container>
        </div>
        <div className='lng'>
          <h2> Frameworks and Softwares</h2>
        </div>
        <div>
          <Container className='tech_cards_container'>
          <img className='face' src={face} alt='face'/>
          <img id='eyes' className='eye' src={eye} alt='eye'/>
            {frameworks.map((e, idx) => {
              return (<div key={idx} className='techcard'>
                <img className='tech_icon' src={e.src} alt='framework logo'/>
                <span style={{ margin: '5px', fontSize: '1.5rem' }}>{e.name}</span>
              </div>)
            })}
          </Container>
        </div>
      </Container>

      <Footer />
    </div>
  )
}

export default Technologies

