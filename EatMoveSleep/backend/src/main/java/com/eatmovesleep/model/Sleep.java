package com.eatmovesleep.model;
import jakarta.persistence.*;


import java.sql.Date;

@Entity
@Table(name = "sleep_records")
public class Sleep {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sleep_id=null;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private User user;

    @Enumerated(EnumType.STRING)
    private SleepQuality sleep_quality;

    @Column(name = "date_logged", nullable = false)
    private Date date;

    @Column(name = "hours", nullable = false)
    private long hours;

    public enum SleepQuality {
        poor, average, good, excellent
    }

    public long getHours() {
        return hours;
    }

    public void setHours(long hours) {
        this.hours = hours;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setSleep_id(Long sleep_id) {
        this.sleep_id = sleep_id;
    }

    public void setUser(User user) {
        this.user = user;
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



    public SleepQuality getSleep_quality() {
        return sleep_quality;
    }


}
