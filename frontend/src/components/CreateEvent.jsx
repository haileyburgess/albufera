import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useAuth } from "../auth/AuthContext";
import { Button } from "@mui/material";

export function EventForm() {
  const authData = useAuth();
  const isAuthenticated = authData && authData.token;
  const { data: events, loading, error } = useQuery("/events", "events");
  const [inputs, setInputs] = useState({
    location: "",
    date: "",
    description: "",
  });
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);
  const eventsArray = Array.isArray(events) ? events : [events];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleToggleForm = () => {
    setShowForm((prev) => !prev);
    setSuccess("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authData.token,
        },
        body: JSON.stringify(inputs),
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setSuccess("Form submitted successfully!");
      setInputs({ location: "", date: "", description: "" });
    } catch (error) {
      setSuccess("Submission failed");
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  return (
    <div>
      <Button variant="contained" onClick={handleToggleForm}>
        {showForm ? "Cancel" : "Add Event"}
      </Button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <h1 className="eventsHeader">Add a New Event</h1>
          <label>
            Location
            <input
              type="text"
              name="location"
              value={inputs.location || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Date
            <input
              type="date"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
            />
          </label>
          <input className="button" type="submit" />
          {success && <div>{success}</div>}
        </form>
      )}
    </div>
  );
}
