package com.collabify.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.collabify.backend.model.Event;

public interface EventRepository
        extends JpaRepository<Event, Long> {

}