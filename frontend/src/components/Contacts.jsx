import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useAuth } from "../auth/AuthContext";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

export default function Contacts() {
  const authData = useAuth();
  const isAuthenticated = authData && authData.token;
  const { data: contacts, loading, error } = useQuery("/contact", "contact");

  if (!isAuthenticated) {
    return <ContactForm />;
  }

  if (loading || !contacts) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  const contactsArray = Array.isArray(contacts) ? contacts : [contacts];

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    {
      field: "email",
      headerName: "Email Address",
      sortable: false,
      type: "email",
      width: 90,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      sortable: false,
      type: "telephone",
      width: 90,
    },
    {
      field: "message",
      headerName: "Message",
      sortable: false,
      type: "text",
      width: 130,
    },
  ];

  const rows = contactsArray;

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

// Public route results (not logged-in)

export function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((values) => ({
      ...values,
      [name]: value,
    }));
  };
  const [success, setSuccess] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
      if (!response.ok) {
        throw new Error("Submission failed");
      }
      setSuccess("Form submitted successfully!");
      setInputs({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSuccess("Submission failed");
    }
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Email address
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Message
        <textarea
          type="text"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
        />
      </label>
      <input className="button" type="submit" />
      {success && <div>{success}</div>}
    </form>
  );
}
