import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <div className='footer_container'>
     <Container className='nxt_layer'> 
         <Row className='footer_row'>
                  <Col className='footer-col'>
                      <h4>Lorem ipsum</h4>
                      <ul>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                      </ul>
                  </Col>
                  <Col className='footer-col'>
                      <h4>Lorem ipsum</h4>
                      <ul>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                          <li><a href='#'>Lorem ipsum</a></li>
                      </ul>
                  </Col>
                  <Col className='footer-col'>
                      <h4>Follow me</h4>
                      <div>
                          <a href='#' id='follow_me'><FacebookIcon/>Lorem ipsum</a>
                          <a href='#' id='follow_me'><WhatsAppIcon/>Lorem ipsum</a>
                          <a href='#' id='folow_me'><TwitterIcon/>Lorem ipsum</a>
                          <a href='#' id='follow_me'><LinkedInIcon/>Lorem ipsum</a>
                      </div>
                  </Col>
         </Row>
     </Container>
      
    </div>
  )
}

export default Footer
