package com.eatmovesleep.model;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "sleep_records")
public class Sleep {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sleep_id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private SleepQuality sleep_quality;

    @Column(name = "hours", nullable = false)
    private BigDecimal hours;

    public enum SleepQuality {
        poor, average, good, excellent
    }

    @Transient
    private LocalDateTime sleepStart;

    @Transient
    private LocalDateTime sleepEnd;

    public BigDecimal  getHours() {
        return hours;
    }

    public void setHours(BigDecimal  hours) {
        this.hours = hours;
    }

    public void setSleep_id(Long sleep_id) {
        this.sleep_id = sleep_id;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setSleepStart(LocalDateTime sleepStart) {
        this.sleepStart = sleepStart;
    }

    public void setSleepEnd(LocalDateTime sleepEnd) {
        this.sleepEnd = sleepEnd;
    }

    public void setSleep_quality(SleepQuality sleep_quality) {
        this.sleep_quality = sleep_quality;
    }

    public Long getSleep_id() {
        return sleep_id;
    }

    public User getUser() {
        return user;
    }

    public LocalDateTime getSleepStart() {
        return sleepStart;
    }

    public LocalDateTime getSleepEnd() {
        return sleepEnd;
    }

    public SleepQuality getSleep_quality() {
        return sleep_quality;
    }


}
