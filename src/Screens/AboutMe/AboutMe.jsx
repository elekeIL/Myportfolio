import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './AboutMe.css'
import person from '../../Images/person.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Resume from './Resume.pdf'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School'
import Button from '@mui/material/Button';
import Navigation from '../../Screens/Navigation/Navigation'
import Footer from '../../Screens/Footer/Footer'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function AboutMe() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  return (
    <div className='about_container' id='about-me'>
    <Navigation />
      <Container className='about'>
        <Row>
          <div className='section-title'>
            <h2 data-heading='main info'>About Me</h2>
          </div>
        </Row>
        <Row>
          <div className='about-img'>
            <div className='img-box inner-shadow'>
              <img src={person} className='outershadow' alt='profile pic' />
            </div>
            <div className='social-links'>
              <a href='https://twitter.com/IheanyiEleke' target='blank' alt='twitter'><TwitterIcon id="Icon" fontSize="large" /></a>
              <a href='https://www.facebook.com/lawrence.eleke/' target='blank' alt='Facebook'><FacebookIcon id="Icon" /></a>
              <a href='https://www.linkedin.com/in/iheanyi-eleke/' target='blank' alt='linkedin'><LinkedInIcon id="Icon" /></a>
              <a href='https://api.whatsapp.com/send?phone=2347051156720' target='blank' alt='Whatsapp'><WhatsAppIcon id="Icon" /></a>
            </div>
          </div>
          <div className='about-info'>
            <p><span>Hi! my name is eleke lawrence i an Electrical engineer and a Full-stack Web Developer.
            I Eleke, Lawrence Iheanyichukwu with the Registration Number of 2015/198507 of the
            Department of Electrical Engineering, Faculty of Engineering, University of Nigeria, Nsukka,
            hereby authorize Ozioko Kingley Chinweike with the phone number of 08138877956 to
          collect my Statement of result on my behalf, as I am currently indisposed</span></p>
            <Button id = "btn-resume"><a href={Resume} target="blank">View Resume</a></Button>
            <Button id = "btn-resume"><a href='#'>Hire Me</a></Button>
          </div>
        </Row>
        <Row>
          <Tabs style={{margin: '30px 0 60px 0'}} centered value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab icon={< WorkIcon />} label="Experience" {...a11yProps(0)} />
            <Tab icon={< SchoolIcon />} label="Education" {...a11yProps(1)} />
          </Tabs>

          <TabPanel value={value} index={0}>
          <Row>
          <div className='experience tab-content active'>
            <Row>
              <div className='timeline'>
                <Row>
                  <div class='timeline-item'>
                    <div className='icon'>< WorkIcon /></div>
                    <div className='timeline-item-inner outer-shadow'>
                      <span>Nov 2021 - present </span>
                      <h3>Full-stack Web Developer</h3>
                      <h4>Company name, Nigeria</h4>
                      <p>Lawrence Iheanyichukwu with the Registration Number of 2015/198507 of the
                         Department of Electrical Engineering, Faculty of Engineering, University of Nigeria, Nsukka,
                         hereby authorize Ozioko Kingley Chinweike with the phone number of 08138877956 to
                     collect my Statement of result on my behalf, as I am currently indisposed</p>
                    </div>
                  </div>
                  <div class='timeline-item'>
                    <div className='icon'><WorkIcon /></div>
                    <div className='timeline-item-inner outer-shadow'>
                      <span>jun, 2019 - jan, 2020 </span>
                      <h3>Technical service Engineer(intern)</h3>
                      <h4>Company name, Nigeria</h4>
                      <p>Lawrence Iheanyichukwu with the Registration Number of 2015/198507 of the
                         Department of Electrical Engineering, Faculty of Engineering, University of Nigeria, Nsukka,
                         hereby authorize Ozioko Kingley Chinweike with the phone number of 08138877956 to
                     collect my Statement of result on my behalf, as I am currently indisposed</p>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
      </TabPanel>
          <TabPanel value={value} index={1}>
          <Row>
          <div className='education tab-content active'>
            <Row>
              <div className='timeline'>
                <Row>
                  <div class='timeline-item'>
                    <div className='icon'>< SchoolIcon /></div>
                    <div className='timeline-item-inner outer-shadow'>
                      <span>sep, 2015 - jun, 2021 </span>
                      <h3>Electrical engineering</h3>
                      <span>Second class honors, upper division</span>
                      <h4>University of Nigeria, Nsukka</h4>
                      <p>Lawrence Iheanyichukwu with the Registration Number of 2015/198507 of the
                         Department of Electrical Engineering, Faculty of Engineering, University of Nigeria, Nsukka,
                         hereby authorize Ozioko Kingley Chinweike with the phone number of 08138877956 to
                     collect my Statement of result on my behalf, as I am currently indisposed</p>
                    </div>
                  </div>
                </Row>
              </div>
            </Row>
          </div>
        </Row>
      </TabPanel>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}







export default AboutMe
