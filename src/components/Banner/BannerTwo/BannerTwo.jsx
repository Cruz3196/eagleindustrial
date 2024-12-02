import React from 'react';
import BannerTwoButton from '../../Buttons/BannerTwoButton';
import './BannerTwo.css';


const BannerTwo = () => {
  return (
    <section className='BannerTwo-section'>
        <div className='BannerTwo-Header' data-aos='fade-up'>
            <h1>Powering the Life Force of the <br/> Nation’s Most Essential Industries.</h1>
            <BannerTwoButton/>
        </div>
    </section>
  )
}

export default BannerTwo