package com.collabify.backend.controller;

import com.collabify.backend.model.Project;
import com.collabify.backend.repository.ProjectRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
@CrossOrigin("*")
public class ProjectController {

    private final ProjectRepository projectRepository;

    public ProjectController(
            ProjectRepository projectRepository
    ) {
        this.projectRepository = projectRepository;
    }

    @GetMapping
    public List<Project> getProjects() {

        return projectRepository.findAll();

    }

    @PostMapping
    public Project createProject(
            @RequestBody Project project
    ) {

        return projectRepository.save(project);

    }

    @DeleteMapping("/{id}")
    public void deleteProject(
            @PathVariable Long id
    ) {

        projectRepository.deleteById(id);

    }

}