import React from 'react';

const Header = ({ title }) => (
  <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
    <img src="/logo.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
    <h1>{title}</h1>
  </header>
);

export default Header;
