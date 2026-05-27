import React, { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import "./Projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("");

  // GET PROJECTS

  const fetchProjects = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8081/projects"
      );

      setProjects(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();

  }, []);

  // ADD PROJECT

  const handleAddProject = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:8081/projects",
        {
          title,
          description,
          status,
        }
      );

      alert("Projet ajouté");

      setTitle("");
      setDescription("");
      setStatus("");

      fetchProjects();

    } catch (error) {

      console.log(error);

      alert("Erreur");

    }

  };

  // DELETE PROJECT

  const handleDelete = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8081/projects/${id}`
      );

      fetchProjects();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="projects-page">

      <Sidebar active="projects" />

      <div className="projects-content">

        <h1 className="projects-title">
          Mes projets
        </h1>

        {/* FORM */}

        <div className="project-form-card">

          <h3>
            Ajouter un projet
          </h3>

          <form onSubmit={handleAddProject}>

            <input
              type="text"
              placeholder="Titre"
              className="project-input"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Description"
              className="project-input"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <input
              type="text"
              placeholder="Status"
              className="project-input"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            />

            <button className="add-btn">
              Ajouter
            </button>

          </form>

        </div>

        {/* PROJECTS */}

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <p>
                <strong>Status :</strong>{" "}
                {project.status}
              </p>

              <button
                className="delete-btn"
                onClick={() =>
                  handleDelete(project.id)
                }
              >
                Supprimer
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Projects;