package com.collabify.backend.controller;

import com.collabify.backend.model.Task;
import com.collabify.backend.repository.TaskRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/tasks")

public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(
            TaskRepository taskRepository
    ) {
        this.taskRepository = taskRepository;
    }

    @GetMapping
    public List<Task> getTasks() {

        return taskRepository.findAll();

    }

    @PostMapping
    public Task createTask(
            @RequestBody Task task
    ) {

        return taskRepository.save(task);

    }

    @DeleteMapping("/{id}")
    public void deleteTask(
            @PathVariable Long id
    ) {

        taskRepository.deleteById(id);

    }

}