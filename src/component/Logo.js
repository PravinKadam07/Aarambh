import React from 'react';
import './styles.css';
import logo from './images/logo.jpg'
const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt='logo'  className="logo-img" />
    </div>
  );
};

export default Logo;

