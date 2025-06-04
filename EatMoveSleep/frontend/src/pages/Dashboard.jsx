import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [workouts, setWorkouts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [waterCups, setWaterCups] = useState(6);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('ems_logged_in') === 'true';
    if (!isLoggedIn) {
      alert('You must be logged in to access the Dashboard.');
      navigate('/login');
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem('ems_users')) || [];
    const email = localStorage.getItem('ems_logged_in_email');
    const storedUser = allUsers.find((u) => u.email === email);

    const storedImage = localStorage.getItem('ems_user_image');
    const storedWorkouts = JSON.parse(localStorage.getItem('ems_workouts')) || [];
    const storedMeals = JSON.parse(localStorage.getItem('ems_meals')) || [];
    const storedSleep = JSON.parse(localStorage.getItem('ems_sleep')) || [];

    if (storedUser) setUser(storedUser);
    if (storedImage) setImage(storedImage);
    setWorkouts(storedWorkouts);
    setMeals(storedMeals);
    setSleep(storedSleep);
  }, [navigate]);

  if (!user) return <p style={{ textAlign: 'center' }}>Loading Dashboard...</p>;

  return (
    <div style={{ fontFamily: "'Helvetica Neue', sans-serif", padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        {image ? (
          <img
            src={image}
            alt="Profile"
            style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ccc' }} />
        )}
        <div>
          <h2 style={{ margin: 0 }}>Good Morning ☀️</h2>
          <p style={{ margin: 0 }}>{user.name}</p>
        </div>
      </div>

      {/* WORKOUTS */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Today's Workout Regime</h3>
        {workouts.length === 0 ? (
          <p>No workouts logged yet.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {workouts.slice(-3).map((w, index) => (
              <li key={index} style={cardStyle}>
                <strong>{w.name}</strong> — {w.calories} kcal
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ACTIONS */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <button onClick={() => navigate('/meals')} style={actionButton}>+ Add Meal</button>
        <button onClick={() => navigate('/workouts')} style={actionButton}>+ Log Workout</button>
        <button onClick={() => navigate('/sleep')} style={actionButton}>+ Record Sleep</button>
      </div>

      {/* STATS - 2x2 Fixed Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 260px)',
        gap: '2rem 4rem',
        justifyContent: 'center',
      }}>
        <StatBox label="Calories In" value={`${meals.reduce((sum, m) => sum + m.calories, 0)} kcal`} color="#facc15" />
        <StatBox label="Calories Out" value={`${workouts.reduce((sum, w) => sum + w.calories, 0)} kcal`} color="#4ade80" />
        <StatBox label="Sleep" value={`${sleep.reduce((sum, s) => sum + s.hours, 0)} h`} color="#818cf8" />

        {/* Water Stat */}
        <div
          style={{
            width: '260px',
            height: '140px',
            backgroundColor: '#38bdf8',
            borderRadius: '8px',
            padding: '1rem',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1.2,
          }}
        >
          <p style={{ margin: 0, marginBottom: '8px' }}>Water</p>
          <h3 style={{ margin: 0, marginBottom: '8px' }}>{waterCups}/8 Cups</h3>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => setWaterCups(w => Math.max(0, w - 1))} style={circleButton}>−</button>
            <button onClick={() => setWaterCups(w => Math.min(8, w + 1))} style={circleButton}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  backgroundColor: '#f3f4f6',
  padding: '1rem',
  marginBottom: '1rem',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
};

const actionButton = {
  flex: '1 1 200px',
  padding: '12px',
  backgroundColor: '#3b82f6',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const circleButton = {
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  backgroundColor: 'white',
  color: '#38bdf8',
  border: 'none',
  fontSize: '1.0rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const StatBox = ({ label, value, color }) => (
  <div style={{
    width: '260px',
    height: '140px',
    backgroundColor: color,
    borderRadius: '8px',
    padding: '1rem',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <p style={{ margin: 0 }}>{label}</p>
    <h3 style={{ margin: '0.5rem 0 0' }}>{value}</h3>
  </div>
);

export default Dashboard;
