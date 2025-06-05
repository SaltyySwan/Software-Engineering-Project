package com.eatmovesleep.model;

import jakarta.persistence.*;


@Entity
@Table(name = "meals")
public class Meal {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long meal_id=null;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 100)
    private String food_name;

    @Column(nullable = false)
    private Integer calories;

    @Column(name = "date_logged", nullable = false)
    private java.sql.Date mealTime;




    public Long getId() {
        return meal_id;
    }

    public void setId(Long id) {
        this.meal_id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public java.sql.Date getMealTime() {
        return mealTime;
    }

    public void setMealTime(java.sql.Date mealTime) {
        this.mealTime = mealTime;
    }


}
