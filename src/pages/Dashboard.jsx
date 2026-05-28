import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import CalendarComponent from "../components/CalendarComponent";

import "./Dashboard.css";

function Dashboard() {

  const [projects, setProjects] =
    useState([]);

  const [tasks, setTasks] =
    useState([]);

  // =========================
  // FETCH PROJECTS
  // =========================

  const fetchProjects = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8081/projects"
        );

      setProjects(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // =========================
  // FETCH TASKS
  // =========================

  const fetchTasks = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8081/tasks"
        );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchProjects();

    fetchTasks();

  }, []);

  // =========================
  // COUNTS
  // =========================

  const activeProjects =
    projects.filter(
      (project) =>
        project.status &&
        project.status
          .toLowerCase()
          .trim() === "en cours"
    ).length;

  const tasksInProgress =
    tasks.filter(
      (task) =>
        task.priority &&
        task.priority
          .toLowerCase()
          .trim() === "en cours"
    ).length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.priority &&
        task.priority
          .toLowerCase()
          .trim() === "terminé"
    ).length;

  // =========================
  // GLOBAL PROGRESS
  // =========================

  const globalProgress =
    tasks.length > 0
      ? Math.round(
          (completedTasks /
            tasks.length) *
            100
        )
      : 0;

  return (

    <div className="dashboard-page">

      {/* SIDEBAR */}

      <Sidebar active="dashboard" />

      {/* MAIN */}

      <div className="dashboard-content">

        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <h1 className="dashboard-title">
              Dashboard
            </h1>

            <p className="dashboard-subtitle">
              Bienvenue dans votre espace collaboratif
            </p>

          </div>

        </div>

        {/* TOP CARDS */}

        <div className="row g-4 mb-4">

          {/* PROJECTS */}

          <div className="col-md-4">

            <div className="dashboard-card">

              <h5>
                Projets actifs
              </h5>

              <h1 className="purple-text">
                {activeProjects}
              </h1>

              <small className="green-text">
                +1 ce mois
              </small>

            </div>

          </div>

          {/* TASKS */}

          <div className="col-md-4">

            <div className="dashboard-card">

              <h5>
                Tâches en cours
              </h5>

              <h1 className="orange-text">
                {tasksInProgress}
              </h1>

              <small className="red-text">
                2 en retard
              </small>

            </div>

          </div>

          {/* PROGRESS */}

          <div className="col-md-4">

            <div className="dashboard-card">

              <h5>
                Avancement global
              </h5>

              <h1 className="green-text">
                {globalProgress}%
              </h1>

              <small className="green-text">
                Progression
              </small>

            </div>

          </div>

        </div>

        {/* SECOND SECTION */}

        <div className="row g-4">

          {/* PROJECTS */}

          <div className="col-md-8">

            <div className="dashboard-card">

              <div className="d-flex justify-content-between mb-4">

                <h4>
                  Projets récents
                </h4>

                <span className="view-all">
                  Tout voir
                </span>

              </div>

              {projects.map((project) => (

                <div
                  key={project.id}
                  className="project-item"
                >

                  <div className="d-flex justify-content-between">

                    <div>

                      <h5>
                        {project.name}
                      </h5>

                      <small>
                        {project.description}
                      </small>

                    </div>

                    <div>

                      <span
                        className="badge"
                        style={{
                          backgroundColor:
                            project.status ===
                            "Terminé"
                              ? "green"
                              : project.status ===
                                "En retard"
                              ? "red"
                              : "#6c47ff",

                          color: "white",

                          padding:
                            "10px",
                        }}
                      >
                        {project.status}
                      </span>

                    </div>

                  </div>

                  <div className="progress mt-3">

                    <div
                      className="progress-bar"
                      style={{
                        width:
                          project.status ===
                          "Terminé"
                            ? "100%"
                            : project.status ===
                              "En retard"
                            ? "35%"
                            : "60%",

                        backgroundColor:
                          project.status ===
                          "Terminé"
                            ? "green"
                            : project.status ===
                              "En retard"
                            ? "red"
                            : "#6c47ff",
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* CALENDAR */}

         

          <div className="col-md-4">

            <div className="dashboard-card">

               <h4 className="mb-4">
                  Calendrier
               </h4>

               <CalendarComponent />

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;