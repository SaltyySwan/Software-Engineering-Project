import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TopNavbar = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('ems_users')) || [];
    const loggedEmail = localStorage.getItem('ems_logged_in_email');
    const activeUser = allUsers.find(u => u.email === loggedEmail);
    if (activeUser) setUser(activeUser);
  }, []);

  const handleLogout = () => {
  localStorage.removeItem('ems_logged_in');
  localStorage.removeItem('ems_logged_in_email');
  localStorage.removeItem('ems_user');
  window.location.href = '/'; // ovo će refreshovati i vratiti na Naslovnu
};


  const navLinks = [
    { path: '/dashboard', label: '🏠 Home' },
    { path: '/meals', label: '🍽 Meals' },
    { path: '/workouts', label: '🏋️ Workouts' },
    { path: '/sleep', label: '😴 Sleep' },
    { path: '/analytics', label: '📊 Analytics' },
    { path: '/profile', label: '👤 Profile' },
  ];

  return (
    <nav style={navStyle}>
      <div style={navLeft}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              ...linkStyle,
              ...(location.pathname === link.path ? activeStyle : {})
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div style={navRight}>
        {user && <span style={userStyle}>👋 {user.name}</span>}
        <button onClick={handleLogout} style={logoutStyle}>Logout</button>
      </div>
    </nav>
  );
};

// Styles
const navStyle = {
  backgroundColor: '#1f2937',
  padding: '0.75rem 1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const navLeft = {
  display: 'flex',
  gap: '1.2rem'
};

const navRight = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '6px 10px',
  borderRadius: '6px',
  transition: '0.3s'
};

const activeStyle = {
  backgroundColor: '#374151'
};

const userStyle = {
  color: '#d1d5db',
  fontWeight: 'bold'
};

const logoutStyle = {
  backgroundColor: '#ef4444',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default TopNavbar;
