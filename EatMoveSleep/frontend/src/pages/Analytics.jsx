import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Analytics = () => {
  const [totalMeals, setTotalMeals] = useState(0);
  const [caloriesIn, setCaloriesIn] = useState(0);
  const [caloriesOut, setCaloriesOut] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [sleepRecords, setSleepRecords] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('ems_logged_in') === 'true';
    const email = localStorage.getItem('ems_logged_in_email');
    if (!isLoggedIn || !email) {
      alert('You must be logged in to access Analytics.');
      navigate('/login');
      return;
    }

    // Meals
    const allMeals = JSON.parse(localStorage.getItem('ems_meals')) || [];
    const meals = allMeals.filter((m) => m.email === email);
    setTotalMeals(meals.length);
    const totalIn = meals.reduce((sum, m) => sum + (m.calories || 0), 0);
    setCaloriesIn(totalIn);

    // Workouts
    const allWorkouts = JSON.parse(localStorage.getItem('ems_workouts')) || [];
    const workouts = allWorkouts.filter((w) => w.email === email);
    const totalOut = workouts.reduce((sum, w) => sum + (w.calories || 0), 0);
    setCaloriesOut(totalOut);

    // Sleep
    const allSleep = JSON.parse(localStorage.getItem('ems_sleep')) || [];
    const sleep = allSleep.filter((s) => s.email === email);
    const totalSleep = sleep.reduce((sum, s) => sum + (s.hours || 0), 0);
    setSleepHours(totalSleep);
    setSleepRecords(sleep.length);
  }, [navigate]);

  const avgSleep = sleepRecords > 0 ? (sleepHours / sleepRecords).toFixed(1) : 0;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>📊 Your Analytics</h2>

      <div style={gridStyle}>
        <StatBox label="🍽 Total Meals Logged" value={totalMeals} />
        <StatBox label="🔥 Calories In" value={`${caloriesIn} kcal`} color="#fbbf24" />
        <StatBox label="🏋️ Calories Out" value={`${caloriesOut} kcal`} color="#34d399" />
        <StatBox label="😴 Total Sleep Hours" value={`${sleepHours} h`} color="#818cf8" />
        <StatBox label="🛏 Avg Sleep" value={`${avgSleep} h/night`} color="#60a5fa" />
      </div>
    </div>
  );
};

const StatBox = ({ label, value, color = '#e5e7eb' }) => (
  <div style={{
    backgroundColor: color,
    padding: '1.5rem',
    borderRadius: '12px',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
  }}>
    <p style={{ margin: 0 }}>{label}</p>
    <h3 style={{ marginTop: '0.5rem' }}>{value}</h3>
  </div>
);

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1.5rem'
};

export default Analytics;
