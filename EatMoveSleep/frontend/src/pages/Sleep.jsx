import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSleepAnalytics } from '../services/api';




const Sleep = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');
  const [quality, setQuality] = useState('');
  const [records, setRecords] = useState([]);
  const [sleep, setSleep] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('ems_logged_in');
    getSleepAnalytics(1).then(setSleep)
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    setDate(today);

    const stored = JSON.parse(localStorage.getItem('ems_sleep')) || [];
    setRecords(stored);
  }, [navigate]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!date || !hours) return;

    const newRecord = {
      id: Date.now(),
      date,
      hours: parseFloat(hours),
      quality: quality || 'N/A'
    };

    const updated = [...records, newRecord];
    setRecords(updated);
    localStorage.setItem('ems_sleep', JSON.stringify(updated));

    setHours('');
    setQuality('');
    setDate(new Date().toISOString().split('T')[0]);
  };

  const handleDelete = (id) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem('ems_sleep', JSON.stringify(updated));
  };

  

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>😴 Sleep Tracker</h2>

      <form onSubmit={handleAdd} style={formContainer}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Hours slept"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          style={inputStyle}
        />
        <input
          type="number"
          placeholder="Sleep quality (1–5)"
          value={quality}
          onChange={(e) => setQuality(e.target.value)}
          min="1"
          max="5"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyleGreen}>Add Sleep Record</button>
      </form>

      <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Saved Sleep Records</h3>

      <div style={gridStyle}>
        {sleep.map((r) => (
          <div key={r.sleep_id} style={cardStyle}>
            <h4>🛏 {r.date_logged}</h4>
            <p><strong>Hours:</strong> {r.hours} h</p>
            <p><strong>Quality:</strong> {r.quality}/5</p>
            <button onClick={() => handleDelete(r.id)} style={deleteStyle}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const formContainer = {
  maxWidth: '500px',
  margin: '0 auto',
  backgroundColor: '#f9fafb',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  marginBottom: '1rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem'
};

const buttonStyleGreen = {
  padding: '12px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#16a34a',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginTop: '1rem'
};

const cardStyle = {
  backgroundColor: '#f3f4f6',
  borderRadius: '10px',
  padding: '1rem',
  textAlign: 'left',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
};

const deleteStyle = {
  marginTop: '1rem',
  backgroundColor: '#dc2626',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer'
};

export default Sleep;
