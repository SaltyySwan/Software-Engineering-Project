import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('ems_logged_in') === 'true';

  if (!isLoggedIn) {
    alert('You must be logged in to access the Dashboard.');
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
