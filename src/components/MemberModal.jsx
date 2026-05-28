import React, {
  useEffect,
  useState,
} from "react";

import "./MemberModal.css";

function MemberModal({
  closeModal,
  addMember,
  editMember,
  selectedMember,
}) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [role, setRole] =
    useState("Développeuse");

  const [status, setStatus] =
    useState("Actif");

  // SI EDIT

  useEffect(() => {

    if (selectedMember) {

      setName(
        selectedMember.name
      );

      setEmail(
        selectedMember.email
      );

      setRole(
        selectedMember.role
      );

      setStatus(
        selectedMember.status
      );

    }

  }, [selectedMember]);

  // SAVE

  const handleSubmit = () => {

    const memberData = {

      id: selectedMember
        ? selectedMember.id
        : Date.now(),

      initials:
        name
          .split(" ")
          .map((word) =>
            word.charAt(0)
          )
          .join(""),

      name,

      email,

      role,

      status,

      color:
        role === "Admin"
          ? "#7b1fa2"
          : role ===
            "Développeuse"
          ? "#00875a"
          : "#c26a00",

      bg:
        role === "Admin"
          ? "#f3d9ff"
          : role ===
            "Développeuse"
          ? "#d7f9e9"
          : "#fff0db",
    };

    if (selectedMember) {

      editMember(memberData);

    } else {

      addMember(memberData);

    }

    closeModal();

  };

  return (

    <div className="modal-overlay">

      <div className="member-modal">

        <h2>

          {selectedMember
            ? "Modifier membre"
            : "Inviter un membre"}

        </h2>

        <p>

          Ajoutez un nouveau membre à votre équipe

        </p>

        {/* NAME */}

        <input
          type="text"
          className="member-input"
          placeholder="Nom complet"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* EMAIL */}

        <input
          type="email"
          className="member-input"
          placeholder="Adresse email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        {/* ROLE */}

        <select
          className="member-select"
          value={role}
          onChange={(e) =>
            setRole(e.target.value)
          }
        >

          <option>
            Admin
          </option>

          <option>
            Développeuse
          </option>

          <option>
            Visiteur
          </option>

        </select>

        {/* STATUS */}

        <select
          className="member-select"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option>
            Actif
          </option>

          <option>
            Inactif
          </option>

        </select>

        {/* BUTTONS */}

        <div className="modal-buttons">

          <button
            className="cancel-btn"
            onClick={closeModal}
          >
            Annuler
          </button>

          <button
            className="save-btn"
            onClick={handleSubmit}
          >
            Sauvegarder
          </button>

        </div>

      </div>

    </div>

  );

}

export default MemberModal;