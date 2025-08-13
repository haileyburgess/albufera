import React from "react";
import Events, { FutureEvents } from "../components/Events";

export default function EventsPage() {
  return (
    <div>
      <div>
        <FutureEvents />
      </div>
      <div>
        <Events />
      </div>
    </div>
  );
}
