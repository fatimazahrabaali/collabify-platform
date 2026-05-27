import { useEffect, useState } from "react";

import axios from "axios";

import Sidebar from "../components/Sidebar";

import CreateTaskModal from "../components/CreateTaskModal";

import "./Tasks.css";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [showModal, setShowModal] =
    useState(false);

  const [filter, setFilter] =
    useState("Toutes");

  const [searchTerm, setSearchTerm] =
    useState("");

  // GET TASKS

  const fetchTasks = async () => {

    try {

      const response = await axios.get(
        "http://localhost:8081/tasks"
      );

      setTasks(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  // DELETE TASK

  const handleDeleteTask = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8081/tasks/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  return (

    <div className="tasks-page">

      {/* Sidebar */}

      <Sidebar active="tasks" />

      {/* Main Content */}

      <div className="tasks-content">

        {/* Header */}

        <div className="tasks-header">

          <h1>Tâches</h1>

          <div className="header-actions">

            <input
              type="text"
              className="search-input"
              placeholder="Rechercher une tâche..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

            <button
              className="new-task-btn"
              onClick={() =>
                setShowModal(true)
              }
            >
              + Nouvelle tâche
            </button>

          </div>

        </div>

        {/* FILTERS */}

        <div className="filters">

          <button
            className={
              filter === "Toutes"
                ? "filter-btn active-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("Toutes")
            }
          >
            Toutes
          </button>

          <button
            className={
              filter === "A faire"
                ? "filter-btn active-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("A faire")
            }
          >
            A faire
          </button>

          <button
            className={
              filter === "En cours"
                ? "filter-btn active-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("En cours")
            }
          >
            En cours
          </button>

          <button
            className={
              filter === "Terminé"
                ? "filter-btn active-filter"
                : "filter-btn"
            }
            onClick={() =>
              setFilter("Terminé")
            }
          >
            Terminées
          </button>

        </div>

        {/* TASKS */}

        {tasks
          .filter((task) => {

            const matchFilter =

              filter === "Toutes"
                ? true
                : task.priority ===
                  filter;

            const matchSearch =

              task.title
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                );

            return (
              matchFilter &&
              matchSearch
            );

          })
          .map((task) => (

            <div
              className="task-card"
              key={task.id}
            >

              <div className="task-top">

                <div>

                  <h2>{task.title}</h2>

                  <p>
                    {task.description}
                  </p>

                  <span
                    className={
                      task.priority ===
                      "En cours"
                        ? "task-badge orange"
                        : task.priority ===
                          "A faire"
                        ? "task-badge red"
                        : "task-badge green"
                    }
                  >
                    {task.priority}
                  </span>

                </div>

                {/* MENU */}

                <div className="dropdown">

                  <button
                    className="menu-btn"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    ⋮
                  </button>

                  <ul className="dropdown-menu">

                    <li>

                      <button
                        className="dropdown-item"
                      >
                        ✏️ Modifier
                      </button>

                    </li>

                    <li>

                      <button
                        className="dropdown-item text-danger"
                        onClick={() =>
                          handleDeleteTask(task.id)
                        }
                      >
                        🗑️ Supprimer
                      </button>

                    </li>

                  </ul>

                </div>

              </div>

            </div>

          ))}

      </div>

      {/* MODAL */}

      {showModal && (

        <CreateTaskModal
          closeModal={() =>
            setShowModal(false)
          }
          refreshTasks={fetchTasks}
        />

      )}

    </div>

  );

}

export default Tasks;