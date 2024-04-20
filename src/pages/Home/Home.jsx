import React from 'react';
import './Home.css'

import AI from '../../assets/images/Right Welcome.png'

const Home = () => {
  return (
    <section className="container py-5 mt-5" id='home'>
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6">
                <p className="highlight text-info">Technology Landing Page</p>
                <h1 className="text-white">Explore Cutting Edge AI Technology</h1>
                <p className='text-white-50'>Dive into a world where cutting-edge technology converges with human ingenuity to redefine possibilities. Our platform showcases the transformative impact of AI across industries.</p>

                <div class="input-group mb-3 rounded">
                    <input type="text" className="form-control" placeholder="Add Your Text Here..." aria-label="Add Your Text Here..." aria-describedby="basic-addon" />
                    <button class="btn explore text-white" type="button">Explore</button>
                </div>
            </div>

            <div className="col-4">
                <img src={AI} alt="AI Generated" className="img-fluid" />
            </div>
        </div>
    </section>
  )
}

export default Home