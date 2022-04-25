import React from 'react'
import './NavigationBar.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { navigationLinks } from '../../Helpers/navigationLinks'

function createLinks () {
return navigationLinks.map((e, idx) => (<Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
 ))
}


function NavigationBar() {
  return (
    <div id='home'>
      <Navbar className='navigation_container' style = {{zIndex: '2', position: 'fixed', top: '0', width: '100%'}} collapseOnSelect expand='md'>
      <Navbar.Brand style = {{marginLeft: '1rem'}} href="#home"> Eleke Lawrence </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style= {{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}} id="basic-navbar-nav">
      <Nav style={{margin: '0 1rem'}} className= 'Links'>
          {createLinks()}
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
