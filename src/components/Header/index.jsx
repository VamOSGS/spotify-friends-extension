import React from 'react';
import './header.css';

export default function Header({ title = ' Spotify With Friends' }) {
  return (
    <header className='app-header'>
      <img src='/assets/icons/icon-72x72.png' alt='Spotify logo' />
      <span className='header-title'>{title}</span>
    </header>
  );
}
