import React, { useState } from "react";

import Sidebar from "../components/Sidebar";

import MemberModal from "../components/MemberModal";

import "./Members.css";

function Membres() {

  const [searchTerm, setSearchTerm] =
    useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [selectedMember, setSelectedMember] =
    useState(null);

  const [members, setMembers] =
    useState([
      {
        id: 1,
        initials: "LA",
        name: "Lina Alouach",
        email: "lina@email.com",
        role: "Admin",
        status: "Actif",
        color: "#7b1fa2",
        bg: "#f3d9ff",
      },

      {
        id: 2,
        initials: "FB",
        name: "Fatima Zahra Baali",
        email: "fatima@email.com",
        role: "Développeuse",
        status: "Actif",
        color: "#00875a",
        bg: "#d7f9e9",
      },

      {
        id: 3,
        initials: "PR",
        name: "Prof. Référent",
        email: "prof@univ.ma",
        role: "Visiteur",
        status: "Inactif",
        color: "#c26a00",
        bg: "#fff0db",
      },
    ]);

  // DELETE MEMBER

  const handleDeleteMember = (id) => {

    const updatedMembers =
      members.filter(
        (member) =>
          member.id !== id
      );

    setMembers(updatedMembers);

  };

  // ADD MEMBER

  const addMember = (newMember) => {

    setMembers([
      ...members,
      newMember,
    ]);

  };

  // EDIT MEMBER

  const editMember = (updatedMember) => {

    const updatedMembers =
      members.map((member) =>

        member.id ===
        updatedMember.id
          ? updatedMember
          : member

      );

    setMembers(updatedMembers);

  };

  return (

    <div className="d-flex members-page">

      {/* SIDEBAR */}

      <Sidebar active="members" />

      {/* MAIN CONTENT */}

      <div className="flex-grow-1 p-5">

        {/* HEADER */}

        <div className="d-flex justify-content-between align-items-center mb-4 members-header">

          <div>

            <h1>
              Membres
            </h1>

            <p>
              {members.length} membres dans l'équipe
            </p>

          </div>

          <button
            className="invite-btn"
            onClick={() => {

              setSelectedMember(null);

              setShowModal(true);

            }}
          >
            + Inviter un membre
          </button>

        </div>

        {/* SEARCH */}

        <div className="mb-4">

          <input
            type="text"
            className="search-input"
            placeholder="🔍 Rechercher un membre..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
          />

        </div>

        {/* TABLE */}

        <div className="members-table">

          {/* HEADER */}

          <div className="row table-header">

            <div className="col-4">
              Membre
            </div>

            <div className="col-3">
              Email
            </div>

            <div className="col-3">
              Rôle
            </div>

            <div className="col-2">
              Actions
            </div>

          </div>

          {/* MEMBERS */}

          {members
            .filter((member) =>
              member.name
                .toLowerCase()
                .includes(
                  searchTerm.toLowerCase()
                )
            )
            .map((member) => (

              <div
                className="row align-items-center border-bottom member-row"
                key={member.id}
              >

                {/* MEMBER */}

                <div className="col-4 d-flex align-items-center gap-3">

                  <div
                    className="member-avatar"
                    style={{
                      backgroundColor:
                        member.bg,

                      color:
                        member.color,
                    }}
                  >
                    {member.initials}
                  </div>

                  <div>

                    <h5 className="mb-1">
                      {member.name}
                    </h5>

                    <small
                      className="member-status"
                      style={{
                        color:
                          member.status ===
                          "Actif"
                            ? "green"
                            : "gray",
                      }}
                    >
                      ● {member.status}
                    </small>

                  </div>

                </div>

                {/* EMAIL */}

                <div className="col-3">

                  {member.email}

                </div>

                {/* ROLE */}

                <div className="col-3">

                  <span
                    className="role-badge"
                    style={{
                      backgroundColor:
                        member.bg,

                      color:
                        member.color,
                    }}
                  >
                    {member.role}
                  </span>

                </div>

                {/* ACTIONS */}

                <div className="col-2 d-flex gap-2">

                  {/* EDIT */}

                  <button
                    className="action-btn"
                    onClick={() => {

                      setSelectedMember(
                        member
                      );

                      setShowModal(true);

                    }}
                  >
                    ✏
                  </button>

                  {/* DELETE */}

                  <button
                    className="action-btn delete-btn"
                    onClick={() =>
                      handleDeleteMember(
                        member.id
                      )
                    }
                  >
                    ✕
                  </button>

                </div>

              </div>

            ))}

        </div>

      </div>

      {/* MODAL */}

      {showModal && (

        <MemberModal
          closeModal={() =>
            setShowModal(false)
          }

          addMember={addMember}

          editMember={editMember}

          selectedMember={
            selectedMember
          }
        />

      )}

    </div>

  );

}

export default Membres;