import React, { useState } from "react";

import axios from "axios";

import "./CreateTaskModal.css";

function CreateTaskModal({
  closeModal,
  refreshTasks,
}) {

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("En cours");

  // CREATE TASK

  const handleCreateTask =
    async () => {

      try {

        await axios.post(
          "http://localhost:8081/tasks",
          {
            title,
            description,
            priority,
          }
        );

        alert("Tâche créée");

        refreshTasks();

        closeModal();

      } catch (error) {

        console.log(error);

        alert("Erreur backend");

      }

    };

  return (

    <div className="modal-overlay">

      <div className="modal-container">

        {/* TOP DESIGN */}

        <div className="modal-top">

          <div className="modal-shape1"></div>

          <div className="modal-shape2"></div>

        </div>

        {/* CONTENT */}

        <div className="modal-content">

          <div className="modal-header">

            <h2>
              Nouvelle tâche
            </h2>

            <button
              className="close-btn"
              onClick={closeModal}
            >
              ✕
            </button>

          </div>

          {/* TITLE */}

          <div className="modal-input">

            <input
              type="text"
              placeholder="Titre de la tâche"
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
            />

          </div>

          {/* DESCRIPTION */}

          <div className="modal-input">

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />

          </div>

          {/* PRIORITY */}

          <div className="modal-input">

            <select
              value={priority}
              onChange={(e) =>
                setPriority(
                  e.target.value
                )
              }
            >

              <option value="En cours">
                En cours
              </option>

              <option value="A faire">
                A faire
              </option>

              <option value="Terminé">
                Terminé
              </option>

            </select>

          </div>

          {/* BUTTON */}

          <button
            className="create-btn"
            onClick={handleCreateTask}
          >
            Créer la tâche
          </button>

        </div>

      </div>

    </div>

  );

}

export default CreateTaskModal;