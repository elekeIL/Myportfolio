import React from 'react'
import'./ContactMe.css'
import { navigationLinks } from '../../Helpers/navigationLinks'


function createLinks(){
    return navigationLinks.map((e,idx) => (<p key={idx}><a href={e.name}>{e.name}</a></p>))
}

function ContactMe() {
  return (
    <div className='contactMe_container' id='contact'>
      <div className='contactMe_data_links'>
          <div>
            <p> Place of Residence: Kubwa, Abuja </p>
            <p> Eleke Lawrence </p>
            <p> iheanyi.eleke@gmail.com </p>

          </div>  
          <div>
            {createLinks()}
          </div>
      </div>
      <div style={{textAlign: 'center'}}> Copyright&copy; {new Date().getFullYear()} All rights reserved </div>
    </div>
  )
}

export default ContactMe
