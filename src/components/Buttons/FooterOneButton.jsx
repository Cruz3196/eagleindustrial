import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FooterOneButton.css';

const FooterOneButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact')
  }

  return (
    <div onClick={handleClick} className='FooterOneButton'>
        Get a quote on your project
    </div>
  )
}

export default FooterOneButton;