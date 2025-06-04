import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('ems_users')) || [];
    const matchedUser = users.find((u) => u.email === email && u.password === password);

    if (matchedUser) {
      localStorage.setItem('ems_logged_in', 'true');
      localStorage.setItem('ems_logged_in_email', matchedUser.email);
      navigate('/dashboard'); // ⬅️ Navigacija prije alerta
      alert(`Welcome back, ${matchedUser.name}!`);
    } else {
      setError('Incorrect email or password.');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Log In</button>
      </form>
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '1rem',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#6b21a8',
  color: 'white',
  cursor: 'pointer'
};

export default Login;
