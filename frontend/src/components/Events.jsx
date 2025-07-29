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
  return (
    <li className="event">
      {event.location} - {event.date} - {event.description}
    </li>
  );
}
