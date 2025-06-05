const BASE_URL = "http://localhost:8080/api"; // Use 10.0.2.2 if testing on Android emulator

// -------------------- USERS --------------------

export const createUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
};

// -------------------- MEALS --------------------

export const postMeal = async (meal) => {
  const res = await fetch(`${BASE_URL}/meals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  return res.json();
};

export const getMealsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/meals/user/${userId}`);
  return res.json();
};

export const deleteMeal = async (id) => {
  return fetch(`${BASE_URL}/meals/${id}`, { method: "DELETE" });
};

// -------------------- WORKOUTS --------------------

export const postWorkout = async (workout) => {
  const res = await fetch(`${BASE_URL}/workouts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workout),
  });
  return res.json();
};

export const getWorkoutsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/workouts/user/${userId}`);
  return res.json();
};

export const deleteWorkout = async (id) => {
  return fetch(`${BASE_URL}/workouts/${id}`, { method: "DELETE" });
};

// -------------------- SLEEP LOGS --------------------

export const postSleepLog = async (log) => {
  const res = await fetch(`${BASE_URL}/sleep`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log),
  });
  return res.json();
};

export const postSimpleSleepLog = async (data) => {
  const res = await fetch(`${BASE_URL}/sleep/simple`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getSleepLogsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/sleep/user/${userId}`);
  return res.json();
};

// -------------------- GOALS --------------------

export const postGoal = async (goal) => {
  const res = await fetch(`${BASE_URL}/goals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
};

export const updateGoal = async (id, goal) => {
  const res = await fetch(`${BASE_URL}/goals/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(goal),
  });
  return res.json();
};

export const deleteGoal = async (id) => {
  return fetch(`${BASE_URL}/goals/${id}`, { method: "DELETE" });
};

export const getGoalsByUser = async (userId) => {
  const res = await fetch(`${BASE_URL}/goals/user/${userId}`);
  return res.json();
};
