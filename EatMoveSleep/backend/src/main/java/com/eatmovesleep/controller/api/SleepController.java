package com.eatmovesleep.controller.api;


import com.eatmovesleep.model.Sleep;

import com.eatmovesleep.service.SleepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping( value = "/api/sleep",method = RequestMethod.POST,
        headers = "Accept=application/json")
public class SleepController {

    @Autowired
    private final SleepService sleepService;

    public SleepController(SleepService sleepService) {
        this.sleepService = sleepService;
    }

    // Create a new sleep
    @PostMapping
    public ResponseEntity<Sleep> createSleep(@RequestBody Sleep sleep) {
        Sleep saved = sleepService.createSleep(sleep);
        return ResponseEntity.ok(saved);
    }

    // Get all sleeps for a specific user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Sleep>> getSleepsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(sleepService.getSleepsByUserId(userId));
    }

    // Get a single sleep by ID
    @GetMapping("/{id}")
    public ResponseEntity<Sleep> getSleepById(@PathVariable Long id) {
        return ResponseEntity.ok(sleepService.getSleepById(id));
    }

    // Update an existing sleep
    @PutMapping("/{id}")
    public ResponseEntity<Sleep> updateSleep(@PathVariable Long id, @RequestBody Sleep updatedSleep) {
        return ResponseEntity.ok(sleepService.updateSleep(id, updatedSleep));
    }

    // Delete a sleep by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSleep(@PathVariable Long id) {
        sleepService.deleteSleep(id);
        return ResponseEntity.noContent().build();
    }
}
