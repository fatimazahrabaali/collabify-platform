import React from "react";

import { useNavigate } from "react-router-dom";

import "./Sidebar.css";

function Sidebar({ active }) {

  const navigate = useNavigate();

  return (

    <div className="sidebar">

      <h4 className="sidebar-title">
        Platforme Collaborative
      </h4>

      {/* Dashboard */}

      <button
        className={
          active === "dashboard"
            ? "sidebar-btn active-btn"
            : "sidebar-btn"
        }
        onClick={() => navigate("/dashboard")}
      >
        Tableau de bord
      </button>

      {/* Projects */}

      <button
        className={
          active === "projects"
            ? "sidebar-btn active-btn"
            : "sidebar-btn"
        }
        onClick={() => navigate("/projects")}
      >
        Mes projets
      </button>

      {/* Tasks */}

      <button
        className={
          active === "tasks"
            ? "sidebar-btn active-btn"
            : "sidebar-btn"
        }
        onClick={() => navigate("/tasks")}
      >
        Mes tâches
      </button>

      {/* Members */}

      <button
        className={
          active === "members"
            ? "sidebar-btn active-btn"
            : "sidebar-btn"
        }
        onClick={() => navigate("/membres")}
      >
        Membres
      </button>

      {/* Settings */}

      <button
        className={
          active === "settings"
            ? "sidebar-btn active-btn"
            : "sidebar-btn"
        }
        onClick={() => navigate("/parametre")}
      >
        Paramètres
      </button>

    </div>

  );

}

export default Sidebar;