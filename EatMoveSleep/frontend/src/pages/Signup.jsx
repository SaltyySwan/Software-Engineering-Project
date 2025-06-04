import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', dob: '', weight: '', goal: 'lose',
    targetWeight: '', experience: 'beginner',
    email: '', password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, dob, weight, goal, targetWeight, experience, email, password } = formData;

    if (!name || !dob || !weight || !targetWeight || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    const user = { name, dob, weight, goal, targetWeight, experience, email, password };
    const users = JSON.parse(localStorage.getItem('ems_users')) || [];

    const emailExists = users.some((u) => u.email === email);
    if (emailExists) {
      setError('An account with this email already exists.');
      return;
    }

    const updatedUsers = [...users, user];
    localStorage.setItem('ems_users', JSON.stringify(updatedUsers));
    localStorage.setItem('ems_logged_in', 'true');
    localStorage.setItem('ems_logged_in_email', email);

    alert('Signup successful! Please log in.');
    navigate('/login');


  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} style={inputStyle} />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={inputStyle} />
        <input type="number" name="weight" placeholder="Current Weight (kg)" value={formData.weight} onChange={handleChange} style={inputStyle} />

        <select name="goal" value={formData.goal} onChange={handleChange} style={inputStyle}>
          <option value="lose">Lose Weight</option>
          <option value="gain">Gain Weight</option>
        </select>

        <input type="number" name="targetWeight" placeholder="Target Weight (kg)" value={formData.targetWeight} onChange={handleChange} style={inputStyle} />

        <select name="experience" value={formData.experience} onChange={handleChange} style={inputStyle}>
          <option value="beginner">Beginner</option>
          <option value="advanced">Advanced</option>
        </select>

        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={inputStyle} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={inputStyle} />

        <button type="submit" style={buttonStyle}>Create Account</button>
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
  backgroundColor: '#4c1d95',
  color: 'white',
  cursor: 'pointer',
  width: '100%'
};

export default Signup;
