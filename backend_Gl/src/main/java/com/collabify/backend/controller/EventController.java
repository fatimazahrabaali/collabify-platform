package com.collabify.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.collabify.backend.model.Event;
import com.collabify.backend.repository.EventRepository;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    // GET ALL EVENTS

    @GetMapping
    public List<Event> getAllEvents() {

        return eventRepository.findAll();

    }

    // ADD EVENT

    @PostMapping
    public Event createEvent(
            @RequestBody Event event) {

        return eventRepository.save(event);

    }

    // DELETE EVENT

    @DeleteMapping("/{id}")
    public void deleteEvent(
            @PathVariable Long id) {

        eventRepository.deleteById(id);

    }
}