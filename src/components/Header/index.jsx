import React from 'react';
import './header.css';

const imageSize = {
  lg: '72px',
  sm: '32px'
}

export default function Header({ title = ' Spotify With Friends', size = 'lg' }) {
  return (
    <header className='app-header'>
      <img src='/assets/icons/icon-72x72.png' alt='Spotify logo' width={imageSize[size]} />
      <span className='header-title'>{title}</span>
    </header>
  );
}
