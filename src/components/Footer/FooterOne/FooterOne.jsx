import React from 'react';
import './FooterOne.css';
import FooterOneButton from '../../Buttons/FooterOneButton';

const FooterOne = () => {
  return (
    <section className='FooterOne-Section'>
      <div className='FooterOne-Container'>
        <div className='FooterOne-Content'>
          <div className='FooterOne-Logo'>
            <h2>Eagle Industrial</h2>
          </div>
          <div id='borderline'>
          </div>
            <h2 className='FooterOne-Ending'>
              Quality and Safety, Engineered.
            </h2>
          <FooterOneButton/>
        </div>
      </div>
    </section>
  )
}

export default FooterOne