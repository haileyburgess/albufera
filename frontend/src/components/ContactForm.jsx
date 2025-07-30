import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

export default function ContactForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
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
          type="varchar"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          type="integer"
          name="phone"
          value={inputs.phone || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Message
        <input
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
