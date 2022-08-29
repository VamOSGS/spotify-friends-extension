import React from 'react';
import './header.css';
// import Button from 'components/Button';
const imageSize = {
  lg: '72px',
  sm: '32px',
};

export default function Header({
  title = ' Spotify With Friends',
  size = 'lg',
  logOut,
  isGuest,
}) {
  return (
    <header className='app-header'>
      <div>
        <img
          src='/assets/icons/icon-72x72.png'
          alt='Spotify logo'
          width={imageSize[size]}
        />
        <span className='header-title'>{title}</span>
      </div>
      {/* {!isGuest && <Button onClick={logOut}>Log out</Button>} */}
    </header>
  );
}
