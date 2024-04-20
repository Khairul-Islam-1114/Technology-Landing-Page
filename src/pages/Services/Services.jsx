import React from 'react';
import './Services.css';
import biotech from '../../assets/images/biotech.png';
import devices from '../../assets/images/devices.png';
import robot from '../../assets/images/robot.png';
import smartToy from '../../assets/images/smart_toy.png';





const Services = () => {

    const myServices = [
        {
            logo: biotech,
            title: 'Services One',
            description: 'Join us on this journey to discover how technology'
        },
        {
            logo: devices,
            title: 'Services Two',
            description: 'Join us on this journey to discover how technology'
        },
        {
            logo: robot,
            title: 'Services Three',
            description: 'Join us on this journey to discover how technology'
        },
        {
            logo: smartToy,
            title: 'Services Four',
            description: 'Join us on this journey to discover how technology'
        },
    ];

  return (
    <section id='services' className='container py-5'>

        <div>

        <p className="highlight text-info text-center">Our Services</p>
        <h2 className='text-center text-white'>Accelerating Tech Advancements</h2>
        <p className="text-center text-white-50">Our platform showcases the latest in tech trends, from AI and machine learning to cybersecurity, IoT, and beyond. Whether you're an enthusiast, a developer, or a business seeking tech solutions, our curated resources and insights empower</p>

        </div>


        <div className="row service-box mx-auto border rounded-5 py-3 mt-5">

            {myServices.map((service, index)=>{
                return (<div key={index} className="col d-flex flex-column justify-content-center align-items-center service-col">
                        <img src={service.logo} alt={service.logo} />
                        <h5 className="text-center text-white">{service.title}</h5>
                        <p className="text-center text-white-50">{service.description}</p>
                      </div>)
            }

            )}

        </div>
        
    </section>
  )
}

export default Services