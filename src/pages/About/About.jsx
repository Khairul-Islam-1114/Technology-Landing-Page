import React, { useEffect, useState } from 'react';
import './About.css';
import boyWithTech from '../../assets/images/Left About Image.png'

const About = () => {
  const [activeUser, setActiveUser] = useState(0);
  const [teamWork, setTeamWork] = useState(0);
  const activeUserTarget = 12378;
  const teamWorkTarget = 32792;

  useEffect(()=>{

    const activeUserInterval = setInterval(() => {

      setActiveUser(prevActiveUser => {
        const increment = Math.ceil((activeUserTarget - prevActiveUser) / 100);
        return prevActiveUser + increment;
      });

    }, 10);
    
    const teamWorkInterval = setInterval(() => {

      setTeamWork(prevTeamWork => {
        const increment = Math.ceil((teamWorkTarget - prevTeamWork) / 100);
        return prevTeamWork + increment;
      });

    }, 10);

    if(activeUser >= activeUserTarget) clearInterval(activeUserInterval);
    if(teamWork >= teamWorkTarget) clearInterval(teamWorkInterval)


    return () =>{
      clearInterval(activeUserInterval);
      clearInterval(teamWorkInterval);
    }

    
  },[activeUser,teamWork,activeUserTarget,teamWorkTarget]);

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

                <div className='row d-flex'>

                  <div className="col text-white d-flex flex-column">
                    <h2 className="active-user">{activeUser}+</h2>
                    Active User
                  </div>


                  <div className="col text-white d-flex flex-column">
                    <h2 className="team-work">{teamWork}+</h2>
                    Team Work
                  </div>


                </div>
            </div>



        </div>
    </section>
  )
}

export default About;