import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img src="/logo.png" alt="App Logo" style={{ height: '100px' }} />
      <h2>Login</h2>
      <input type="email" placeholder="Email" /><br /><br />
      <input type="password" placeholder="Password" /><br /><br />
      <button onClick={() => navigate('/feed')}>Login</button>
      <p>Don't have an account? <span onClick={() => navigate('/signup')} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up</span></p>
    </div>
  );
};

export default Login;
