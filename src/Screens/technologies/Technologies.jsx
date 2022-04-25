import React from 'react'
import './Technologies.css'
import DevIcon from "devicon-react-svg";
import { techs } from '../../Helpers/techs'

function Technologies() {
  return (
    <div className= 'technologies_container' id= 'technologies'>
      <div>
        <h1 style={{textAlign: 'center'}}> Some of the technologies that I Use </h1>
      </div>
      <div className='tech_cards_container'>
        {techs.map((e, idx) => {
          return(<div key={idx} className='techcard'>
            <DevIcon className='tech_icon' icon={e.iconName} />
            <span style={{margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Technologies

