import React from 'react';
import welderImage from "../../Assets/WelderAbout.jpg"
import './About.css';

const About = () => {
  return (
    <section className='about-section'>
        <div className='about-content'>
            <div className='about-text'>
                <h2>We believe that every great project begins with a solid infrastructure</h2>
                <p>Our revolutionary engineering, progressive leadership and expert quality of service is how we are able to continuously deliver exceptional work for our clients.</p>
                <p>The expert leadership at our company, combined with the extensive experience of our highly skilled team, delivers innovative solutions and quality service to our clients, ensuring projects are completed safely, on time, and within budget.</p>
                <button className="cta-button" >OUR COMMITMENT TO SAFETY</button>
            </div>
            <div className='image-content'>
                <img src={welderImage} alt='Welder About'/>
            </div>
        </div>
    </section>
  )
}

export default About