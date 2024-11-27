import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutButton.css';

const AboutButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Safety');
  };

  return (
    <button onClick={handleClick} className='AboutButton'>
        OUR COMMITMENT TO SAFETY
    </button>
  )
}

export default AboutButton;