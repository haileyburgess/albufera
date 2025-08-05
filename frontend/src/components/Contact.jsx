import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useAuth } from "../auth/AuthContext";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { red } from "@mui/material/colors";

// DataGrid implementation adapted from MUI docs at https://mui.com/material-ui/react-table/

const columns = [
  {
    field: "created_date",
    headerName: "Date",
    width: 120,
    valueFormatter: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString();
    },
  },
  { field: "name", headerName: "Name", width: 180 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "phone", headerName: "Phone Number", width: 110 },
  {
    field: "message",
    headerName: "Message",
    type: "text",
    width: 150,
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function Contacts() {
  const authData = useAuth();
  const isAuthenticated = authData && authData.token;
  const { data: contacts, loading, error } = useQuery("/contact", "contact");

  const contactsArray = Array.isArray(contacts) ? contacts : [contacts];

  if (!isAuthenticated) {
    return <ContactForm />;
  }

  if (loading || !contacts) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;
  return (
    <div>
      <h2>Contacts and Messages</h2>
      <Paper className="contactsTable">
        <DataGrid
          rows={contactsArray}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}

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
    <form className="container" onSubmit={handleSubmit}>
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
