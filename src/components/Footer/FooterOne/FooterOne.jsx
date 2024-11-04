import React from 'react';
import './FooterOne.css';
import FooterOneButton from '../../Buttons/FooterOneButton';

const FooterOne = () => {
  return (
    <section className='FooterOne-Section'>
      <div className='FooterOne-Content'>
        <div className='FooterOne-Logo'>
          <h2>Eagle Industrial</h2>
        </div>
        <div id='borderline'></div>
          <div className='FooterTwo-Content'>
            <h2>
              Quality and Safety, Engineered.
            </h2>
          </div>
          <FooterOneButton/>
      </div>
    </section>
  )
}

export default FooterOne