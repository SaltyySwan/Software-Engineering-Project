package com.eatmovesleep.model;
import jakarta.persistence.*;

import java.math.BigInteger;

@Entity
@Table(name = "goals")
public class Goal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long goalId=null;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Column(nullable = false, length = 50)
    private String type; // e.g., "calories", "steps", "sleep"

    @Column(nullable = false)
    private BigInteger target;

    private BigInteger progress;

    @Enumerated(EnumType.STRING)
    private Status status = Status.in_progress;

    public enum Status {
        in_progress, completed, missed
    }

    public Long getGoalId() {
        return goalId;
    }

    public void setGoalId(Long goalId) {
        this.goalId = goalId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigInteger getTarget() {
        return target;
    }

    public void setTarget(BigInteger target) {
        this.target = target;
    }

    public BigInteger getProgress() {
        return progress;
    }

    public void setProgress(BigInteger progress) {
        this.progress = progress;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
