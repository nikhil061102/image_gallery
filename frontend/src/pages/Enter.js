import React from 'react';
import { Link } from 'react-router-dom';

const Enter = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1 style={{ fontSize: '5rem' }}>🖼 Welcome to Photo Gallery App📱</h1>
        <p style={{ fontSize: '3rem' }}>For Login, <Link to="/login" style={{ color: 'blue' }}>Click Here</Link></p>
        <p style={{ fontSize: '3rem' }}>For Signup, <Link to="/signup" style={{ color: 'blue' }}>Click Here</Link></p>
      </div>
    </div>
  );
};

export default Enter;
