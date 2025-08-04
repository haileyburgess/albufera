import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { useAuth } from "../auth/AuthContext";

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

  console.log(contacts);
  return (
    <ul>
      {contactsArray.map((contact) => (
        <ContactsListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

function ContactsListItem({ contact }) {
  const dateObject = new Date(contact.date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="container">
      <div>
        <div>{contact.name}</div>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        <div>{contact.message}</div>
        <div>{formattedDate}</div>
      </div>
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
