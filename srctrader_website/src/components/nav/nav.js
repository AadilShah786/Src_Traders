import React, { useState, useEffect } from "react";
import logo from '../../assets/main_logo.png';
import '../../css/nav.css';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
import ham from '../../assets/ham.png';
import SignInButton from "./signbutton";
import BOTTOM from "./bottom";
import home1 from '../../assets/icons/home1.png';
import home2 from '../../assets/icons/home2.png';
import about1 from '../../assets/icons/about1.png';
import about2 from '../../assets/icons/about2.png';
import contact1 from '../../assets/icons/contact1.png';
import conntact2 from '../../assets/icons/contact2.png';
import pricing1 from '../../assets/icons/pricing1.png';
import pricing2 from '../../assets/icons/pricing2.png';

function NAV() {
  // Define the media query
  const query = window.matchMedia('(max-width: 767px)');
  const [activeSection, setActiveSection] = useState('home');

  // Check if the media query matches
  if (query.matches) {
    // Media query matches (e.g., screen width is <= 600px)
    console.log('The screen width is 767px or less.');
  } else {
    // Media query doesn't match
    console.log('The screen width is greater than 767px.');
  }

  // You can also add a listener to detect changes in the media query
  query.addListener((event) => {
    if (event.matches) {
      console.log('Media query matched.');
    } else {
      console.log('Media query unmatched.');
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  function structure() {

    
    if (query.matches) {
      return (
        <div className="NAV">
          {isDrawerOpen && <BOTTOM trigclose={closeDrawer} activeSection={activeSection}/>}
          <div className="nav-left">
            <img src={ham} alt="logo" className="ham" onClick={toggleDrawer} ></img>
          </div>
          <div className="logo_holder" >
          <img src={logo} alt="logo-top" className="logo" onClick={() => scrollToSection('home-section')}></img>
            SRC Traders
          </div>
            
            <SignInButton />
      
        </div>
      )
    } else {
      return (
        <div className="NAV">
          
          <div className="nav-left">
            <img src={logo} alt="logo" className="logo" onClick={() => scrollToSection('section1')}></img>
          </div>
          <div className="nav-center">
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

          <SignInButton />

        </div>
      )
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // console.log(activeSection)
    const handleScroll = () => {
      const homeSection = document.getElementById('home-section');
      const aboutSection = document.getElementById('about-section');
      const contactSection = document.getElementById('contact-section');
      const pricingSection = document.getElementById('pricing-section');

      const scrollPosition = window.scrollY;

      if (
        scrollPosition < aboutSection.offsetTop - 300 &&
        activeSection !== 'home'
      ) {
        setActiveSection('home');
      } else if (
        scrollPosition >= aboutSection.offsetTop - 300 &&
        scrollPosition < pricingSection.offsetTop - 300 &&
        activeSection !== 'about'
      ) {
        setActiveSection('about');
      } else if (
        scrollPosition >= pricingSection.offsetTop - 300 &&
        scrollPosition < contactSection.offsetTop - 300 &&
        activeSection !== 'pricing'
      ) {
        setActiveSection('pricing');
      } else if (
        scrollPosition >= contactSection.offsetTop - 300 &&
        activeSection !== 'contact'
      ) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return structure();
}

export default NAV;