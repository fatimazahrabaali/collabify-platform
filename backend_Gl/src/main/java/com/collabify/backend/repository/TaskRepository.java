package com.collabify.backend.repository;

import com.collabify.backend.model.Task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository
        extends JpaRepository<Task, Long> {

}