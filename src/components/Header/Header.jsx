import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/Logo.png';
import SignUpModal from './SignUpModal';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home'); 
  const [showSignUp, setShowSignUp] = useState(false);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    console.log(link);
  };

  const toggleSignUpModal = () => {
    setShowSignUp(!showSignUp)
  }

  return (
    <nav className='navbar navbar-expand-md'>

        <div className="container">

            <a href="#home" className="navbar-brand">
                <img src={logo} alt="" />
            </a>

            <button className="navbar-toggler bg-light rounded" type='button' data-bs-toggle="collapse" data-bs-target="#collapsableNav" aria-controls='collapsableNav' aria-expanded="false" aria-label='Toggle navigation'>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsableNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a href="#home" className={`nav-link ${activeLink === 'home' ? 'isActive' : ''}`} onClick={() => handleNavLinkClick('home')}>Home</a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className={`nav-link ${activeLink === 'about' ? 'isActive' : ''}`} onClick={() => handleNavLinkClick('about')}>About</a>
                    </li>

                    <li className="nav-item">
                        <a href="#services" className={`nav-link ${activeLink === 'services' ? 'isActive' : ''}`} onClick={() => handleNavLinkClick('services')}>Services</a>
                    </li>

                    <li className="nav-item">
                        <a href="#blog" className={`nav-link ${activeLink === 'blog' ? 'isActive' : ''}`} onClick={() => handleNavLinkClick('blog')}>Blog</a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className={`nav-link ${activeLink === 'contact' ? 'isActive' : ''}`} onClick={() => handleNavLinkClick('contact')}>Contact</a>
                    </li>
                </ul>

                <div className="user-info">
                    <button className="btn" type='button'>Sign In</button>
                    <button className="btn" type='button' style={{backgroundColor:'rgb(221, 12, 142)'}} onClick={toggleSignUpModal}>Sign Up</button>
                </div>
            </div>

        </div>
            {showSignUp && (
               <SignUpModal show={showSignUp} handleClose={toggleSignUpModal} /> 
            )}
    </nav>
  )
}

export default Header;
