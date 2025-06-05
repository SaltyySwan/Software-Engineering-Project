import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="ems-header">
      <h1 className="ems-logo" onClick={() => navigate('/')}>EatMoveSleep</h1>
      <nav className="ems-nav">
        <button className="nav-button" onClick={() => navigate('/login')}>Log In</button>
        <button className="nav-button signup" onClick={() => navigate('/signup')}>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;
