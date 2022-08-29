import React from 'react';
import './buttonStyles.css';

export default function Button({ children, ...props }) {
  return (
    <button {...props} className='Button'>
      {children}
    </button>
  );
}
