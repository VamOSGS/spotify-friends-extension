import React from 'react';
import Header from 'components/Header';
import { useSpotify } from 'contexts/SpotifyContext';
import Button from 'components/Button';
import { login } from 'services/auth';
import UserInfo from 'components/UserInfo';

function Options() {
  const { user, logOut } = useSpotify();
  return (
    <div className='App'>
      <Header logOut={logOut} isGuest={user.id === 'guest'} />
      {user.id === 'guest' ? (
        <Button onClick={login}>
          <img src='/assets/icons/white.png' alt='' className='icon' />
          Sign In with Spotify
        </Button>
      ) : (
        <UserInfo user={user} />
      )}
    </div>
  );
}

export default Options;
