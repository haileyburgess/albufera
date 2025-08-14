import React from "react";
import Events, { FutureEvents } from "../components/Events";
import { EventForm } from "../components/CreateEvent";
import { UpdateEvent } from "../components/UpdateEvent";
import { InstagramEmbed } from "react-social-media-embed";
export default function EventsPage() {
  return (
    <div className="events">
      <div className="event-form">
        <EventForm />
      </div>
      <div className="future-events">
        <FutureEvents />
      </div>
      <div className="past-events">
        <Events />
      </div>
      <div
        className="insta"
        style={{ display: "grid", justifyContent: "center" }}
      >
        <InstagramEmbed
          url="https://www.instagram.com/p/DLk-3CWSFPD/"
          width="auto"
        />
      </div>
    </div>
  );
}
