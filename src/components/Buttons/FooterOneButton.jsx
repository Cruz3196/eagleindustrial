import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterOneButton.css';

const FooterOneButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact')
  }

  return (
    <button onClick={handleClick} className='FooterOneButton'>
        Get a quote on your project
    </button>
  )
}

export default FooterOneButton;