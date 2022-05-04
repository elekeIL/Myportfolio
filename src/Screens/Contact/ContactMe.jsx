import React from 'react'
import'./ContactMe.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Navigation from '../../Screens/Navigation/Navigation'
import Footer from '../../Screens/Footer/Footer'
import MyEmoji from '../../Images/MyEmoji.gif'

function ContactMe () {
  return (
    <div className='contact-section'>
    <Navigation />
      <Container>
        <div className='img_contact'>
        <img className='outer-shadow' src={MyEmoji} alt='image'/>
        </div>
        <Row>
          <div className='section-title'>
          <h2 data-handling='contact'>Get In Touch</h2>
          </div>
        <div className='contact-item'>
          <div className='contact-item-inner outer-shadow'>
            <PhoneIcon id='contact_icon' />
            <span>Phone</span>
            <p>+234705 115 6720</p>
          </div>
        </div>
        <div className='contact-item'>
          <div className='contact-item-inner outer-shadow'>
            <EmailIcon id='contact_icon' />
            <span>Email</span>
            <p>iheanyi.eleke@gmail.com</p>
          </div>
        </div>
        <div className='contact-item'>
          <div className='contact-item-inner outer-shadow'>
            <HomeIcon id='contact_icon' />
            <span>Address</span>
            <p>Plot B6,Oduduwa Street, Phase 2 Site 2,Kubwa, Abuja</p>
          </div>
        </div>
        </Row>
      </Container>
      <Row>
        <div className='contact-form'>
          <form>
            <Row>
              <div className='w-50'>
                <div className='input-group outer-shadow hover-in-shadow'>
                <input type='text' placeholder='Name' className='input-control'></input>
                </div>
                <div className='input-group outer-shadow hover-in-shadow'>
                <input type='text' placeholder='Email' className='input-control'></input>
                </div>
                <div className='input-group outer-shadow hover-in-shadow'>
                <input type='text' placeholder='Subject' className='input-control'></input>
                </div>
              </div>
            <div class='w-50'>
              <div className='input-group outer-shadow hover-in-shadow'>
              <textarea className='input-control' placeholder='Message'></textarea>
            </div>
          </div>
            </Row>
            <Row>
              <div class='submit-btn'>
                <button type='submit' className='btn-1 outer-shadow'>Send</button>
              </div>
            </Row>
          </form>
        </div>
      </Row>
    <Footer />
    </div>
  )
}
export default ContactMe
