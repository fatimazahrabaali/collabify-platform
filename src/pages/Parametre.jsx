import React, { useState } from "react";

import Sidebar from "../components/Sidebar";

import "./Parametre.css";

function Parametre() {

  // PROFILE STATES

  const [fullName, setFullName] =
    useState("Adam Bal");

  const [email, setEmail] =
    useState("adam@gmail.com");

  const [role, setRole] =
    useState("Admin");

  // SECURITY STATES

  const [currentPassword,
    setCurrentPassword] =
    useState("");

  const [newPassword,
    setNewPassword] =
    useState("");

  // NOTIFICATIONS

  const [taskNotif,
    setTaskNotif] =
    useState(true);

  const [statusNotif,
    setStatusNotif] =
    useState(true);

  const [memberNotif,
    setMemberNotif] =
    useState(false);

  // SAVE PROFILE

  const handleSaveProfile = () => {

    alert(
      "Profil sauvegardé avec succès"
    );

  };

  // CHANGE PASSWORD

  const handleChangePassword =
    () => {

      if (
        currentPassword === "" ||
        newPassword === ""
      ) {

        alert(
          "Remplissez les champs"
        );

        return;

      }

      alert(
        "Mot de passe modifié"
      );

      setCurrentPassword("");

      setNewPassword("");

    };

  return (

    <div className="d-flex settings-page">

      {/* SIDEBAR */}

      <Sidebar active="settings" />

      {/* MAIN */}

      <div className="flex-grow-1 p-5">

        {/* HEADER */}

        <div className="settings-header mb-5">

          <h1>
            Paramètres
          </h1>

          <p>
            Gérer votre compte et préférences
          </p>

        </div>

        {/* GRID */}

        <div className="row g-4">

          {/* PROFILE */}

          <div className="col-md-6">

            <div className="settings-card">

              <h2>
                Profil utilisateur
              </h2>

              {/* NAME */}

              <div className="mb-4">

                <label>
                  Nom complet
                </label>

                <input
                  type="text"
                  className="settings-input"
                  value={fullName}
                  onChange={(e) =>
                    setFullName(
                      e.target.value
                    )
                  }
                />

              </div>

              {/* EMAIL */}

              <div className="mb-4">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  className="settings-input"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                />

              </div>

              {/* ROLE */}

              <div className="mb-4">

                <label>
                  Rôle
                </label>

                <select
                  className="settings-select"
                  value={role}
                  onChange={(e) =>
                    setRole(
                      e.target.value
                    )
                  }
                >

                  <option>
                    Admin
                  </option>

                  <option>
                    Développeur
                  </option>

                  <option>
                    Visiteur
                  </option>

                </select>

              </div>

              {/* BUTTON */}

              <button
                className="settings-btn"
                onClick={
                  handleSaveProfile
                }
              >
                Sauvegarder
              </button>

            </div>

          </div>

          {/* NOTIFICATIONS */}

          <div className="col-md-6">

            <div className="settings-card">

              <h2>
                Notifications
              </h2>

              {/* TASK */}

              <div className="notification-item">

                <div>

                  <h5>
                    Nouvelles tâches
                  </h5>

                  <p className="text-muted">
                    Recevoir une alerte
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={taskNotif}
                  onChange={() =>
                    setTaskNotif(
                      !taskNotif
                    )
                  }
                />

              </div>

              {/* STATUS */}

              <div className="notification-item">

                <div>

                  <h5>
                    Changement de statut
                  </h5>

                  <p className="text-muted">
                    Tâche modifiée
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={statusNotif}
                  onChange={() =>
                    setStatusNotif(
                      !statusNotif
                    )
                  }
                />

              </div>

              {/* MEMBER */}

              <div className="notification-item">

                <div>

                  <h5>
                    Nouveau membre
                  </h5>

                  <p className="text-muted">
                    Ajout à l'équipe
                  </p>

                </div>

                <input
                  type="checkbox"
                  checked={memberNotif}
                  onChange={() =>
                    setMemberNotif(
                      !memberNotif
                    )
                  }
                />

              </div>

            </div>

          </div>

          {/* SECURITY */}

          <div className="col-md-6">

            <div className="settings-card">

              <h2>
                Sécurité
              </h2>

              {/* CURRENT PASSWORD */}

              <div className="mb-4">

                <label>
                  Mot de passe actuel
                </label>

                <input
                  type="password"
                  className="settings-input"
                  value={
                    currentPassword
                  }
                  onChange={(e) =>
                    setCurrentPassword(
                      e.target.value
                    )
                  }
                />

              </div>

              {/* NEW PASSWORD */}

              <div className="mb-4">

                <label>
                  Nouveau mot de passe
                </label>

                <input
                  type="password"
                  className="settings-input"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(
                      e.target.value
                    )
                  }
                />

              </div>

              {/* BUTTON */}

              <button
                className="settings-btn"
                onClick={
                  handleChangePassword
                }
              >
                Modifier
              </button>

            </div>

          </div>

          {/* EMPTY CARD */}

          <div className="col-md-6">

            <div className="settings-card empty-card">

              <h3>
                Collabify Settings
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Parametre;