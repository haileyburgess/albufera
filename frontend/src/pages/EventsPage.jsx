import React from "react";
import Events, { FutureEvents } from "../components/Events";
import { EventForm } from "../components/CreateEvent";
import { UpdateEvent } from "../components/UpdateEvent";
export default function EventsPage() {
  return (
    <div className="events">
      <div className="future-events">
        <FutureEvents />
      </div>
      <div className="past-events">
        <Events />
      </div>
      <div className="event-form">
        <EventForm />
      </div>
    </div>
  );
}
