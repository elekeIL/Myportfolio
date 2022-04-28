import React, { useState } from 'react'
import './Portfolio.css'
import porfolioData from '../../Helpers/porfolioData'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})
  
  function createModal(data) {
    return(
      <Modal
      show={modalShow}
      onHide= { () => setModalShow(false)}
      size = 'md'
      arial-labelledby ='contained-modal-title-vcenter'
      centered

      >
      <Modal.Header>
        <Modal.Title id='contaiend-modal-title-vcenter'>
           {data.desc}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{data.summary}</p>
        <Image src={data.image} style={{width: '200px'}}/>
      </Modal.Body>
      <a id='portfolio_modal_link' href={data.link} target='blank' rel='noreferrer'>Go to site </a>
      <Modal.Footer>
        <div>Technologies used</div>
          <p style={{fontsize: '0.7em', marginRight: 'auto',}}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>   
      </Modal>
    )
  }
  
  
  const mapped = porfolioData.map((e, idx) => {return(
    <Card key={idx} id='portfolio_card_container'>
      <img className='portfolio_image' onClick={() => {setTempData({
       image: e.image,
       link: e.link,
       desc: e.desc,
       summary: e.summary,
       tech: e.tech 
      })
      setModalShow(true)
      } }
      src={e.image}
      />
      <div className = 'portfolio_link_info'>&#x1F50E;&#xFE0F;</div>
      {createModal(tempData)}
    </Card>
  )
    })
  return (
    <div className='portfolio_main_container' id='portfolio'>
      <h1> PORTFOLIO </h1>
      <p> This is my GitHub page 
        <a href='https://github.com/elekeIL' target='blank' rel= 'noreferrer'> https://github.com/elekeIL </a>
      </p>
      <Container fluid = 'lg' style= {{padding: '2rem 0'}}>
      <Row>
        {mapped}
      </Row>

      </Container>
    </div>
  )
}

export default Portfolio
