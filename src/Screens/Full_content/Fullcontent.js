import React from 'react'
import NavigationBar from '../../Screens/Navigationbar/NavigationBar'
import AboutMe from '../../Screens/AboutMe/AboutMe'
import Technologies from '../../Screens/technologies/Technologies'
import Porfolio from '../../Screens/Porfolio/Portfolio'
import ContactMe from '../../Screens/Contact/ContactMe'
import Header from '../../Screens/Header/Header'


function Fullcontent() {
    return (
        <div className='containerfulid'>
        <NavigationBar/>
        <Header/>
        <AboutMe/>
        <Technologies/>
        <Porfolio/>
        <ContactMe/>
        </div>
    )
}

export default Fullcontent
