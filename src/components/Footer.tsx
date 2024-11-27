import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-background"></div>
      <div className="footer-content">
        <div className="footer-sections-wrapper">
          <div className="footer-section">
            <h3>DOWNLOAD THE APP</h3>
            <div className="footer-links">
              <a 
                href="https://apps.apple.com/ng/app/tookuai/id6477813473" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                <span className="link-text">iOS App</span>
                <span className="link-line"></span>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.tookuai.order&hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link"
              >
                <span className="link-text">Android App</span>
                <span className="link-line"></span>
              </a>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-section">
            <h3>SUPPORT</h3>
            <div className="footer-links">
              <a href="/faq" className="footer-link">
                <span className="link-text">Help Center/FAQ</span>
                <span className="link-line"></span>
              </a>
              <a href="/safety" className="footer-link">
                <span className="link-text">Safety</span>
                <span className="link-line"></span>
              </a>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-section">
            <h3>CONTACT</h3>
            <a href="mailto:info@tookuai.com" className="footer-link">
              <span className="link-text">info@tookuai.com</span>
              <span className="link-line"></span>
            </a>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-section">
            <h3>LEGAL</h3>
            <div className="footer-links">
              <a href="/terms" className="footer-link">
                <span className="link-text">Terms of service</span>
                <span className="link-line"></span>
              </a>
              <a href="/privacy" className="footer-link">
                <span className="link-text">Privacy Policy</span>
                <span className="link-line"></span>
              </a>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-section">
            <h3>FOLLOW</h3>
            <div className="footer-links">
              <a href="https://www.instagram.com/tookuai/" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span className="link-text">Instagram</span>
                <span className="link-line"></span>
              </a>
              <a href="https://x.com/tookuai" target="_blank" rel="noopener noreferrer" className="footer-link">
                <span className="link-text">X</span>
                <span className="link-line"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="copyright">
          <span> 2024 Tookuài Inc. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;