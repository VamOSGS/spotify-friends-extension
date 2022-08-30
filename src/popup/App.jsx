import Header from 'components/Header';
import React from 'react';
import {getAllCookies} from 'contexts/SpotifyContext'
function Popup() {
  console.log(document.cookie)
  return (
    <div className='popup'>
      <Header size='sm' />
    </div>
  );
}

export default Popup;
