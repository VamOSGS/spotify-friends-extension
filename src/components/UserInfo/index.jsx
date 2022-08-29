import React from 'react';
import './userInfo.css';
export default function UserInfo({ user, logOut }) {
  return (
    <div className='user_info'>
      {user.images.length && <img src={user.images[0].url} alt='' />}{' '}
      <h3>{user.display_name}</h3>
    </div>
  );
}
