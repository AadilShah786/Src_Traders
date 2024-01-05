import React from 'react';
import '../Footer.css'; // Import your CSS file for styling
import foot from '../../assets/2.png'
const Footer = () => {
  return (
    <footer id='contact-section' className="footer" style={{backgroundImage:{foot}}}>
      <div className="footer-container">
        <div className="contact">
          <h2>Contact Us</h2>
          <form className="contact-form" style={{maxWidth:"100vw"}}>
            <input type="text" placeholder="Your Name" style={{maxWidth:"100vw", marginRight:0, paddingRight:0}}/>
            <input type="email" placeholder="Your Email" style={{maxWidth:"100vw", marginRight:0, paddingRight:0}}/>
            <textarea placeholder="Your Message" rows="4" style={{maxWidth:"100vw", marginRight:0, paddingRight:0}}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <ul className="social-links">
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            {/* Add more social media links */}
          </ul>
        </div>
        <div className="dev-contact">
          <h2>Developer Contact</h2>
          <ul className="dev-links">
            <li><a href="mailto:developer@example.com">Email</a></li>
            <li><a href="https://www.github.com">GitHub</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            {/* Add more developer contact links */}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
