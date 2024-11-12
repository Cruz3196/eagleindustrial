import React from 'react';
import AboutOne from '../../../Assets/AboutOne.jpg';
import AboutTwo from '../../../Assets/AboutTwo.jpg';
import AboutThree from '../../../Assets/AboutThree.jpg';
import './CardsAbout.css';

const images = [
    {src: AboutOne, alt: 'image1'},
    {src: AboutTwo, alt: 'image2'},
    {src: AboutThree, alt: 'image3'}
];

const CardsAbout = () => {
  return (
    <section className='CardsAbout-Section'>
        <div className='CardsAbout-Container'>
            {images.map((image, index) => (
              <div key={index} className='CardsAbout-Card'>
                <img className='CardsAbout-Image' src={image.src} alt={image.alt} />
              </div>
            ))}
        </div>
    </section>
  );
};

export default CardsAbout; 