import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>Aarambh Education</span> Center
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Education Center. All rights reserved.</p>
          <p>Address- Opposite Sushant Mangal Karyalaya, Vidyanagar, Kavthe mahankal</p>
        <b> <p >Phone : 7058938258 /<span> 9921448650 /</span> 8055112141</p></b>
          <p>Email: aarambhscienceacademy@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
