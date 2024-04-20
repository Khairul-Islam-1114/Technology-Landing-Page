import React from 'react';
import './Contact.css'
import email from '../../assets/images/mail.svg';
import phone from '../../assets/images/call_log.svg';
import location from '../../assets/images/distance.svg';
import AI from '../../assets/images/Right Contact.png';


const Contact = () => {
  return (
    <section id='contact' className='container py-5'>
        <div className="row d-flex justify-content-between align-items-center gap-5">

            <div className="col">
                <p className="highlight text-info">Contact Us</p>
                <h2 className='text-white'>Get In Touch AI TECH Technology</h2>
                <p className='text-white-50'>Our platform showcases the latest in tech trends, from AI and machine learning to cybersecurity, IoT, and beyond. </p>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-start align-items-center gap-2">
                        <img src={email} alt="mail icon" className="img-fluid" />
                        <h6 className='text-white'><strong>Email:</strong></h6>
                    </div>
                    <div className="col">
                        <a href="mailto:aitechnology@example.com" className='text-white-50'>aitechnology@example.com</a>
                        <br />
                        <a href="mailto:hello.aitechnology@example.com" className='text-white-50'>hello.aitechnology@example.com</a>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-start align-items-center gap-2">
                        <img src={phone} alt="phone icon" className="img-fluid" />
                        <h6 className='text-white'><strong>Contact:</strong></h6>
                    </div>
                    <div className="col">
                        <a href="tel:+12 3456 7890" className='text-white-50'>+12 3456 7890</a>
                        <br />
                        <a href="tel:+09 8765 4321" className='text-white-50'>+09 8765 4321</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-start align-items-center gap-2">
                        <img src={location} alt="location icon" className="img-fluid" />
                        <h6 className='text-white'><strong>Address:</strong></h6>
                    </div>
                    <div className="col">
                        <address className='text-white-50'>
                            address line lorem ipsum
                            <br />
                            address line two lorem ipsum
                        </address>
                        <p className="text-white-50"></p>
                    </div>
                </div>
            </div>

            <div className="col">
                <img src={AI} alt="AI"className='img-fluid'/>
            </div>

        </div>
    </section>
  )
}

export default Contact