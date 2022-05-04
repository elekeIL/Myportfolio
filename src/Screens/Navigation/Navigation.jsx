import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navigation() {
  return (
    <div id='home'>
      <Navbar className='navigation_container' style = {{zIndex: '2', position: 'fixed', top: '0', width: '100%'}} collapseOnSelect expand='md'>
      <Navbar.Brand style = {{marginLeft: '1rem',fontWeight: 'bold'}} href="#home"> Eleke Lawrence </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse style= {{justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}} id="basic-navbar-nav">
      <Nav className= 'Links'>
      <Nav.Link><Link to='/porfolio'>Home</Link></Nav.Link>
      <Nav.Link><Link to='/About'>About Me</Link></Nav.Link>
      <Nav.Link><Link to='/technologies'>Technologies</Link></Nav.Link>
      <Nav.Link><Link to='/projects'>Portfolio</Link></Nav.Link>
      <Nav.Link><Link to='contact'>Contact me</Link></Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation