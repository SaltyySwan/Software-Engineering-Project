import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Meals = () => {
  const navigate = useNavigate();
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');
  const [meals, setMeals] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('ems_logged_in') === 'true';
    const email = localStorage.getItem('ems_logged_in_email');
    if (!isLoggedIn || !email) {
      alert('You must be logged in to access Meals.');
      navigate('/login');
      return;
    }
    setUserEmail(email);

    const allMeals = JSON.parse(localStorage.getItem('ems_meals')) || [];
    const userMeals = allMeals.filter((m) => m.email === email);
    setMeals(userMeals);
  }, [navigate]);

  const handleAddMeal = (e) => {
    e.preventDefault();
    if (!mealName || !calories) return;

    const newMeal = {
      id: Date.now(),
      name: mealName,
      calories: parseInt(calories),
      email: userEmail
    };

    const allMeals = JSON.parse(localStorage.getItem('ems_meals')) || [];
    const updatedAllMeals = [...allMeals, newMeal];
    localStorage.setItem('ems_meals', JSON.stringify(updatedAllMeals));

    const userMeals = updatedAllMeals.filter((m) => m.email === userEmail);
    setMeals(userMeals);

    setMealName('');
    setCalories('');
  };

  const handleDelete = (id) => {
    const allMeals = JSON.parse(localStorage.getItem('ems_meals')) || [];
    const updatedAllMeals = allMeals.filter((m) => m.id !== id);
    localStorage.setItem('ems_meals', JSON.stringify(updatedAllMeals));

    const userMeals = updatedAllMeals.filter((m) => m.email === userEmail);
    setMeals(userMeals);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🍽 Create Meal</h2>

      <div style={formContainer}>
        <input
          type="text"
          placeholder="Meal name (e.g., chicken)"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleAddMeal} style={buttonStyleGreen}>Save Meal</button>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Saved Meals</h3>

      <div style={gridStyle}>
        {meals.map((meal) => (
          <div key={meal.id} style={mealCardStyle}>
            <h4 style={{ textTransform: 'capitalize' }}>🍴 {meal.name}</h4>
            <p>{meal.calories} kcal</p>
            <button onClick={() => handleDelete(meal.id)} style={deleteStyle}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

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
  marginTop: '1rem',
  padding: '12px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#16a34a',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
};

const deleteStyle = {
  backgroundColor: '#dc2626',
  color: 'white',
  border: 'none',
  padding: '6px 12px',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '1rem'
};

const mealCardStyle = {
  backgroundColor: '#f3f4f6',
  borderRadius: '10px',
  padding: '1rem',
  textAlign: 'left',
  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '1.5rem',
  marginTop: '1rem'
};

export default Meals;