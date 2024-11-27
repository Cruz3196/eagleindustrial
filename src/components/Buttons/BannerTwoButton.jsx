import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BannerTwoButton.css';

const BannerTwoButton = () => {
  const navigate = useNavigate();

  const handleClick =(() => {
    navigate('/Services')
  })

  return (
    <button onClick={handleClick} className='BannerTwoButton'>
        MARKETS WE SPECIALIZE IN
    </button>
  )
}

export default BannerTwoButton