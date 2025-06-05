package com.eatmovesleep.model;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "workouts")
public class Workout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long workout_id=null;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 100)
    private String type;



    @Column(name = "calories", nullable = false)
    private int calories;

    @Column(name = "calories_burned", nullable = false)
    private Integer caloriesBurned;

    @Column(name = "date_logged", nullable = false)
    private java.sql.Date dateLogged;



    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public void setWorkout_id(Long workout_id) {
        this.workout_id = workout_id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setType(String type) {
        this.type = type;
    }



    public void setCaloriesBurned(Integer caloriesBurned) {
        this.caloriesBurned = caloriesBurned;
    }

    public void setWorkoutTime(java.sql.Date dateLogged) {
        this.dateLogged = dateLogged;
    }

    public Long getWorkout_id() {
        return workout_id;
    }

    public User getUser() {
        return user;
    }

    public String getType() {
        return type;
    }


    public Integer getCaloriesBurned() {
        return caloriesBurned;
    }

    public java.sql.Date getWorkoutTime() {
        return dateLogged;
    }
}
