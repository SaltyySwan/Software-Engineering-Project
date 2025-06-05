import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import bgImage from '../assets/image1.jpg'; 

const Naslovna = () => {
  const navigate = useNavigate();

 useEffect(() => {
  const isLoggedIn = localStorage.getItem('ems_logged_in');
  if (isLoggedIn === 'true') {
    navigate('/dashboard');
  }
}, [navigate]);


  return (
    <div className="home-container" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '2rem',
      color: 'white'
    }}>
      <div className="overlay" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '2rem',
        borderRadius: '12px',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1>Welcome to EatMoveSleep</h1>
        <p style={{ margin: '1rem 0', fontSize: '18px' }}>
          Your Health, Your Rules. Track, Improve, and Thrive — all offline & secure.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          <button onClick={() => navigate('/login')} style={buttonStyleLogin}>Login</button>
          <button onClick={() => navigate('/signup')} style={buttonStyleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

const buttonStyleLogin = {
  padding: '0.75rem 1.5rem',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#6b21a8',
  color: 'white',
  cursor: 'pointer'
};

const buttonStyleSignup = {
  padding: '0.75rem 1.5rem',
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#4c1d95',
  color: 'white',
  cursor: 'pointer'
};

export default Naslovna;
