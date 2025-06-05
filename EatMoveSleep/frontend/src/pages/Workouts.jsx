import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Workouts = () => {
  const navigate = useNavigate();
  const [workoutTitle, setWorkoutTitle] = useState('');
  const [exerciseInput, setExerciseInput] = useState('');
  const [exerciseList, setExerciseList] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('ems_logged_in');
    if (!isLoggedIn) {
      navigate('/');
      return;
    }

    const storedWorkouts = JSON.parse(localStorage.getItem('ems_grouped_workouts')) || [];
    setWorkouts(storedWorkouts);
  }, [navigate]);

  const handleAddExercise = () => {
    if (exerciseInput.trim() === '') return;
    setExerciseList([...exerciseList, exerciseInput.trim()]);
    setExerciseInput('');
  };

  const handleSaveWorkout = () => {
    if (!workoutTitle || exerciseList.length === 0) return;

    const newWorkout = {
      id: Date.now(),
      title: workoutTitle.trim(),
      exercises: exerciseList
    };

    const updated = [...workouts, newWorkout];
    setWorkouts(updated);
    localStorage.setItem('ems_grouped_workouts', JSON.stringify(updated));

    setWorkoutTitle('');
    setExerciseInput('');
    setExerciseList([]);
  };

  const handleDelete = (id) => {
    const updated = workouts.filter((w) => w.id !== id);
    setWorkouts(updated);
    localStorage.setItem('ems_grouped_workouts', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>🏋️ Create Workout</h2>

      <div style={formContainer}>
        <input
          type="text"
          placeholder="Workout title (e.g. Leg Day)"
          value={workoutTitle}
          onChange={(e) => setWorkoutTitle(e.target.value)}
          style={inputStyle}
        />

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            placeholder="Exercise name"
            value={exerciseInput}
            onChange={(e) => setExerciseInput(e.target.value)}
            style={{ ...inputStyle, flex: 1 }}
          />
          <button onClick={handleAddExercise} style={buttonStyleBlue}>+ Add</button>
        </div>

        {exerciseList.length > 0 && (
          <ul style={exerciseListStyle}>
            {exerciseList.map((ex, index) => (
              <li key={index}>✅ {ex}</li>
            ))}
          </ul>
        )}

        <button onClick={handleSaveWorkout} style={buttonStyleGreen}>Save Workout</button>
      </div>

      <h3 style={{ textAlign: 'center', marginTop: '3rem' }}>Saved Workouts</h3>

      <div style={gridStyle}>
        {workouts.map((workout) => (
          <div key={workout.id} style={workoutCardStyle}>
            <h4 style={{ textTransform: 'capitalize' }}>💪 {workout.title}</h4>
            <ul style={{ paddingLeft: '1.2rem' }}>
              {workout.exercises.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
            <button onClick={() => handleDelete(workout.id)} style={deleteStyle}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
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

const buttonStyleBlue = {
  padding: '10px 16px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#3b82f6',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer'
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

const workoutCardStyle = {
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

const exerciseListStyle = {
  textAlign: 'left',
  marginBottom: '1rem',
  paddingLeft: '1.2rem'
};

export default Workouts;
