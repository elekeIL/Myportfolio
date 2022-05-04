import React, { useState } from 'react'
import './Portfolio.css'
import porfolioData from '../../Helpers/porfolioData'
import MyEmoji1 from '../../Images/MyEmoji1.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Navigation from '../../Screens/Navigation/Navigation'
import Footer from '../../Screens/Footer/Footer'


function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({})

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='md'
        arial-labelledby='contained-modal-title-vcenter'
        centered

      >
        <Modal.Header>
          <Modal.Title id='contaiend-modal-title-vcenter'>
            {data.desc}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
        <a id='portfolio_modal_link' href={data.link} target='blank' rel='noreferrer'>Go to site </a>
        <Modal.Footer>
          <div>Technologies used</div>
          <p style={{ fontsize: '0.7em', marginRight: 'auto', }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }


  const mapped = porfolioData.map((e, idx) => {
    return (
      <Card style={{float:'left', width: '33.33%'}} className='portfolio_items' key={idx} id='portfolio_card_container'>
        <img className='portfolio_image' onClick={() => {
          setTempData({
            image: e.image,
            link: e.link,
            desc: e.desc,
            summary: e.summary,
            tech: e.tech
          })
          setModalShow(true)
        }}
          src={e.image}
        />
        <div className='portfolio_link_info'>&#x1F50E;&#xFE0F;</div>
        {createModal(tempData)}
      </Card>
    )
  })
  return (
    <div id='portfolio'>
      <Navigation />
      <div className='portfolio_main_container'>
      <div className='portfolio_heading'>
        <h1> PORTFOLIO </h1>
        <p> This is my GitHub page
        <a href='https://github.com/elekeIL' target='blank' rel='noreferrer'> https://github.com/elekeIL </a>
        </p>
      </div>
  < div className='portfolio_contanier'>
      <div class='emoji'>
        <img style={{float: 'left', width: '100%', marginTop: '100px'}} src={MyEmoji1} alt='emoji'/>
        </div>
      <Container className='what'>
      <Row>
        <div>
          <Col>
          {mapped}
          </Col>
        </div>
      </Row>
    </Container>
    </div >
    <Footer />
    </div>
    </div>
  )
}

export default Portfolio
