import React from 'react';
import './About.css';
import boyWithTech from '../../assets/images/Left About Image.png'

const About = () => {
  return (
    <section id='about' className='container p-3'>
        <div className="row d-flex justify-content-between align-items-center">

            <div className="col-4">
                <img src={boyWithTech} alt="Boy experiencing technology" className='img-fluid'/>
            </div>

            <div className="col-6">
            <p className="highlight text-info">About Us</p>
                <h1 className="text-white">Transforming with AI Technology</h1>
                <p className='text-white-50'>Welcome to our technology hub, where innovation drives the future. Dive into a realm of cutting-edge advancements, where technology intersects with human ingenuity to shape the world.</p>
            </div>

        </div>
    </section>
  )
}

export default About