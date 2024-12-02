import React from 'react';
import './FooterTwo.css';
import FooterButtonTwo from '../../Buttons/FooterButtonTwo';

const FooterTwo = () => {

  return (
    <section className='FooterTwo-Section'>
      <div  className='FooterTwo-Content'>
        <div className='FooterTwo-Logo' data-aos='fade-up'>
          <h2>Eagle Industrial</h2>
        </div>
        <div id='borderline'>
        </div>
          <h2 className='FooterTwo-Ending' data-aos='fade-up'>
            Quality and Safety, Engineered.
          </h2>
      </div>
          <FooterButtonTwo/>
    </section>
  )
}

export default FooterTwo;