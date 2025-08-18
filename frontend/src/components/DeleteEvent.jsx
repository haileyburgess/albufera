import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useAuth } from "../auth/AuthContext";
import { Button } from "@mui/material";

export function DeleteEvent({ eventId, onDelete }) {
  const authData = useAuth();
  const isAuthenticated = authData && authData.token;
  const { data: events, loading, error } = useQuery("/events", "events");
  const [inputs, setInputs] = useState({
    location: "",
    date: "",
    description: "",
  });

  const eventsArray = Array.isArray(events) ? events : [events];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const [success, setSuccess] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://albufera-api.onrender.com/events/${eventId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + authData.token,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Deleting event failed");
      }
      setSuccess("Event deleted successfully!");
      onDelete();
    } catch (error) {
      setSuccess("Deleting event failed");
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  return <Button onClick={handleDelete}>Delete</Button>;
}
