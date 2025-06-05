package com.eatmovesleep.model;
import jakarta.persistence.*;


import java.math.BigDecimal;


@Entity
@Table(name = "users")
public class User {
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String name;

    @Column(name = "age")
    private Integer age;

    @Column(name = "weight")
    private BigDecimal weight;

    @Column(name = "fitness_goal")
    private String fitnessGoal;

    public String getFitnessGoal() {
        return fitnessGoal;
    }

    public void setFitnessGoal(String fitnessGoal) {
        this.fitnessGoal = fitnessGoal;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }


    public void setAge(Integer age) {
        this.age = age;
    }

    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }





    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }



    public Integer getAge() {
        return age;
    }

    public BigDecimal getWeight() {
        return weight;
    }





}
