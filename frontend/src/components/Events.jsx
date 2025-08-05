import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Events() {
  const { data: events, loading, error } = useQuery("/events", "events");
  const eventsArray = Array.isArray(events) ? events : [events];

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  console.log(events);

  // MUI Card implementation adapted from MUI docs at https://mui.com/material-ui/react-card/

  return (
    <div>
      <h1>Events</h1>
      {eventsArray.map((event) => (
        <Card className="cards" key={event.id}>
          <CardContent>
            <Typography gutterBottom>
              {new Date(event.date).toLocaleDateString()}
            </Typography>
            <Typography variant="h5" component="div">
              {event.location}
            </Typography>
            <Typography variant="body2">{event.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

/* /* //   return (
//     <ul>
//       {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </ul>
  );
}
// function EventListItem({ event }) { */
/* const dateObject = new Date(event.date);
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
} */
