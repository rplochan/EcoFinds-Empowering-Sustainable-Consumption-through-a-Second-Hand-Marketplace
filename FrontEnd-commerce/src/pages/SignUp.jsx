import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img src="/logo.png" alt="App Logo" style={{ height: '100px' }} />
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" /><br /><br />
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={() => navigate('/feed')}>Sign Up</button>
      <p>Already have an account? <span onClick={() => navigate('/')} style={{ color: 'blue', cursor: 'pointer' }}>Login</span></p>
    </div>
  );
};

export default SignUp;
