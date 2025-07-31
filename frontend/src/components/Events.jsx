import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";

export default function Events() {
  const { data: events, loading, error } = useQuery("/events", "events");

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  console.log(events);
  return (
    <ul>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
}

function EventListItem({ event }) {
  const dateObject = new Date(event.date);
  const formattedDate = dateObject.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="container">
      <div className="event">
        <div>{event.location}</div>
        <div>{formattedDate}</div>
        <div>{event.description}</div>
      </div>
    </div>
  );
}
