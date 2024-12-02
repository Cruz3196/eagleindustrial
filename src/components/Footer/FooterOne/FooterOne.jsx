import React from 'react';
import { useLocation } from 'react-router-dom';
import './FooterOne.css';
import FooterOneButton from '../../Buttons/FooterOneButton';

const FooterOne = () => {
  const location = useLocation();

  // check if the current path matches "About" or "Safety"
  const AboutFooter = location.pathname === '/About';

  return (
    <section className='FooterOne-Section'
    style={{
      height: AboutFooter ? '60vh' : '46vh', // Conditional height
    }}
    >
      <div 
        className='FooterOne-Content'
        style={{
          marginTop: AboutFooter ? '100px' : '0px',
        }}
        data-aos='fade-up'
      >
        <div className='FooterOne-Logo'>
          <h2>Eagle Industrial</h2>
        </div>
        <div id='borderline'>
        </div>
          <h2 className='FooterOne-Ending'>
            Quality and Safety, Engineered.
          </h2>
      </div>
          <FooterOneButton/>
    </section>
  )
}

export default FooterOne