import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import CalendarButton from "./CalendarButton";
import { EventForm } from "./CreateEvent";
import { DeleteEvent } from "./DeleteEvent";

export default function Events() {
  const { data: events, loading, error } = useQuery("/events", "events");
  const eventsArray = Array.isArray(events) ? events : [events];

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  console.log(events);

  // MUI Card implementation adapted from MUI docs at https://mui.com/material-ui/react-card/

  return (
    <div>
      <h1 className="eventsHeader">Past Events</h1>
      {eventsArray
        .filter((event) => new Date(event.date) < new Date())
        .map((event) => (
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
      <EventForm></EventForm>
    </div>
  );
}
// Future events only

export function FutureEvents() {
  const navigate = useNavigate();
  const { data: events, loading, error } = useQuery("/events", "events");
  const eventsArray = Array.isArray(events) ? events : [events];

  if (loading || !events) return <p>Loading...</p>;
  if (error) return <p>Sorry! There was a bug. {error}</p>;

  console.log(events);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/events");
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate("/contact");
  };

  // MUI Card implementation adapted from MUI docs at https://mui.com/material-ui/react-card/

  return (
    <div>
      <h1 className="eventsHeader">Upcoming Events</h1>
      <div className="ctas">
        <Button variant="contained" onClick={handleClick}>
          View Past Events
        </Button>
        <Button variant="contained" onClick={handleContactClick}>
          Book Private Event
        </Button>
      </div>
      {eventsArray
        .filter((event) => new Date(event.date) > new Date())
        .map((event) => (
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
            {/* <CardActions>
              <CalendarButton event={event}></CalendarButton>
            </CardActions> */}
            <CardActions>
              <DeleteEvent eventId={event.id} />
            </CardActions>
          </Card>
        ))}
    </div>
  );
}
