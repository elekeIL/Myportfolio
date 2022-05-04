import React from 'react'
import './Technologies.css'
import DevIcon from 'devicon-react-svg'
import { techs } from '../../Helpers/techs'
import { frameworks } from '../../Helpers/frameworks'
import Container from 'react-bootstrap/Container'
import Navigation from '../../Screens/Navigation/Navigation'
import Footer from '../../Screens/Footer/Footer'


function Technologies() {
  return (
    <div id='technologies'>
      <Navigation />
      <Container className='technologies_container'>
        <div className='heading'>
          <h1 style={{ textAlign: 'center' }}> Programming skills and Frameworks </h1>
        </div>
        <div className='lng'>
          <h2> Programming Languages</h2>
        </div>
        <div>
          <Container className='tech_cards_container'>
            {techs.map((e, idx) => {
              return (<div key={idx} className='techcard'>
                <DevIcon className='tech_icon' icon={e.iconName} />
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
            {frameworks.map((e, idx) => {
              return (<div key={idx} className='techcard'>
                <DevIcon className='tech_icon' icon={e.iconName} />
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

