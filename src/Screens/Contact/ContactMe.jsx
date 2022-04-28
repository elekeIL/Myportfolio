import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import'./ContactMe.css'
import { navigationLinks } from '../../Helpers/navigationLinks'


function createLinks(){
    return navigationLinks.map((e,idx) => (<p key={idx}><a href={e.name}>{e.name}</a></p>))
}


function ContactMe () {
  return (
    <MDBFooter color="blue" className="font-small">
      <MDBContainer fluid className="text-center">
        <MDBRow>
          <MDBCol className md="6">
            <p> Place of Residence: Kubwa, Abuja </p>
            <p> Eleke Lawrence </p>
            <p> iheanyi.eleke@gmail.com </p>
          </MDBCol>
          <MDBCol className='Links' md="6">
            {createLinks()}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default ContactMe
