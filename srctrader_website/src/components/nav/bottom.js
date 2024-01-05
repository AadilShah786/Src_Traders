import React from "react";

import home1 from '../../assets/icons/home1.png';
import home2 from '../../assets/icons/home2.png';
import about1 from '../../assets/icons/about1.png';
import about2 from '../../assets/icons/about2.png';
import contact1 from '../../assets/icons/contact1.png';
import conntact2 from '../../assets/icons/contact2.png';
import pricing1 from '../../assets/icons/pricing1.png';
import pricing2 from '../../assets/icons/pricing2.png';



function BOTTOM({trigclose , activeSection}){
  const scrollToSection = (id) => {
    trigclose();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    return(
      <div className="nav-bottom">
      <ul className="list" color="white">
        <li className={activeSection === 'home' ? 'activesec' : ''} onClick={() => scrollToSection('home-section')}>
          <img src={home1} className="navicon" style={{height:"3vh"}}></img>
          Home
        </li>
        <li className={activeSection === 'about' ? 'activesec' : ''} onClick={() => scrollToSection('about-section')}>
        <img src={about1} className="navicon" style={{height:"3vh"}}></img>
          About
        </li>
        <li className={activeSection === 'pricing' ? 'activesec' : ''} onClick={() => scrollToSection('pricing-section')}>
        <img src={pricing1} className="navicon" style={{height:"3vh"}}></img>
          Pricing</li>
        <li className={activeSection === 'contact' ? 'activesec' : ''} onClick={() => scrollToSection('contact-section')}>
        <img src={contact1} className="navicon" style={{height:"3vh"}}></img>
          Contact
        </li>
      </ul>
    </div>
    )
}

export default BOTTOM;