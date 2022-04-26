import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const Exercise6 = () => {
  return (
    <div className='container'>
      <Link to='/'>← Back to Home</Link>
      <h1>Exercise 6: Code Splitting Components</h1>
    </div>
  );
};
