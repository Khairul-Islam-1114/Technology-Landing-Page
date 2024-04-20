import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [emailInput, setEmailInput] = useState('');

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailInput || !emailInput.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        setEmailInput('');

        alert('Thank you for subscribing!');

        
    }
  return (
    <footer className='container rounded px-4 pt-5 pb-4' id='footer'>

        <div className="row">

            <div className="col">
                <h2 className='text-white'>Stay Information</h2>
                <p className='text-white-50'>Sign up for our newsletter</p>
            </div>

            <div className="col d-flex align-items-center">
                <div className='input-group rounded bg-white p-2'>
                    <input type="email" className='form-control' name="email" id="email" value={emailInput} onChange={handleEmailInput} placeholder='Enter Your Email Here...'/>
                    <button type="submit" className='btn text-white subscribe-btn' onClick={handleSubmit}>Subscribe</button>
                </div>
            </div>

        </div>

<div className="divider rounded"></div>

        <div className="row second-row">

            <div className="col">
                <h3 className="text-white"><strong>AI-TECH - Technology Landing Page</strong></h3>
                <p className="text-white-50">Explore a diverse range of career possibilities tailored to your skills and preferences. Our user-friendly interface streamlines your job search.</p>
            </div>

            <div className="col">
                
                <div className="row">

                    <div className="col">

                        <p className="bold text-white"><strong>Information</strong></p>
                        <a href="#" className="link">Press Centre</a>
                        <a href="#blog" className="link">Our Blog</a>
                        <a href="#" className="link">Terms & Condition</a>


                    </div>

                    <div className="col">
                        <p className="bold text-white"><strong>Contact</strong></p>
                        <a href="tel:+123 456 789" className='link'><strong className='text-white'>Phone:</strong> +123456789</a>
                        <a href="mailto:@example.com" className='link'><strong className='text-white'>Email:</strong> @example.com</a>
                        <address className='text-white-50'>Address Line 01</address>


                    </div>
                    <div className="col">
                        <p className="bold text-white"><strong>Menu</strong></p>
                        <a href="#about" className="link">About</a>
                        <a href="#services" className="link">Services</a>
                        <a href="#contact" className="link">Contact</a>
                    </div>

                </div>

            </div>

        </div>
    </footer>
  )
}

export default Footer;