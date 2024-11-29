import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterButtonTwo.css';

const FooterButtonTwo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact')
  }

  return (
    <button onClick={handleClick} className='FooterButtonTwo'>
        Get a quote on your project
    </button>
  )
}

export default FooterButtonTwo;