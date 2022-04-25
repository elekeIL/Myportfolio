import React from 'react'
import './AboutMe.css'
import person from '../../Images/person.png'

function AboutMe() {
  return (
    <div className='about_container' id = 'about-me'>
      <div>
        <img src={person} alt="person-icon"/>
      </div>
      <div className='about_text'>
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet, ut vis omittam signiferumque. Mei ei movet accommodare, civibus officiis ut nam, assum habemus et his. Id sit error fierent, ne utinam tractatos per. Vim ex brute nonumy, mei et noster erroribus instructior. Id vocibus scaevola invenire vis, mel eu vidit temporibus. Oblique ullamcorper pro cu. </p>
      </div>
    </div>
  )
}

export default AboutMe
