import React from 'react';
import { useLocation } from 'react-router-dom';
import './FooterOne.css';
import FooterOneButton from '../../Buttons/FooterOneButton';

const FooterOne = () => {
  const location = useLocation();

  // check if the current path matches "About" or "Safety"
  const footerTwo = location.pathname === '/About' || location.pathname === '/Safety';

  return (
    <section className='FooterOne-Section'
    style={{
      height: footerTwo ? '60vh' : '46vh', // Conditional height
    }}
    >
      <div 
        className='FooterOne-Content'
        style={{
          marginTop: footerTwo ? '100px' : '0px',
        }}
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