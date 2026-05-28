import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";

import interactionPlugin from "@fullcalendar/interaction";

import "./CalendarComponent.css";

function CalendarComponent() {

  const [events, setEvents] =
    useState([]);

  // FETCH EVENTS

  const fetchEvents = async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:8081/events"
        );

      setEvents(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchEvents();

  }, []);

  // ADD EVENT

  const handleDateClick =
    async (info) => {

      const title = prompt(
        "Nom de l'événement"
      );

      if (!title) return;

      try {

        await axios.post(
          "http://localhost:8081/events",
          {
            title: title,
            date: info.dateStr,
          }
        );

        fetchEvents();

      } catch (error) {

        console.log(error);

      }

    };

  // DELETE EVENT

  const handleEventClick =
    async (clickInfo) => {

      const confirmDelete =
        window.confirm(
          "Supprimer cet événement ?"
        );

      if (!confirmDelete)
        return;

      try {

        await axios.delete(
          `http://localhost:8081/events/${clickInfo.event.id}`
        );

        fetchEvents();

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <div
      style={{
        padding: "10px",
      }}
    >

      <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
        ]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={
          handleDateClick
        }
        eventClick={
          handleEventClick
        }
        height="500px"
        headerToolbar={{
          left: "",
          center: "title",
          right: "prev,next",
        }}
      />

    </div>

  );

}

export default CalendarComponent;