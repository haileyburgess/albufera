import useQuery from "../api/useQuery";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
// import CalendarButton from "./CalendarButton";
import { EventForm } from "./CreateEvent";
import { DeleteEvent } from "./DeleteEvent";
import "add-to-calendar-button";
import { UpdateEvent } from "./UpdateEvent";
import { useLocation } from "react-router-dom";
// See this page for more info on the calendar button library: https://add-to-calendar-button.com/use-with-react

export default function Events() {
  const location = useLocation();
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
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
            <CardActions>
              <UpdateEvent eventId={event.id} />
            </CardActions>
          </Card>
        ))}
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
        {location.pathname === "/" && (
          <>
            <Button variant="contained" onClick={handleClick}>
              View Past Events
            </Button>
            <Button variant="contained" onClick={handleContactClick}>
              Book Private Event
            </Button>
          </>
        )}
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
            <CardActions>
              {location.pathname === "/" && (
                <add-to-calendar-button
                  className="add-to-cal"
                  name="Albufera Paella Club Pop-up"
                  options="'Apple','Google','Microsoft365'"
                  startDate={new Date(event.date).toISOString().split("T")[0]}
                  endDate={new Date(event.date).toISOString().split("T")[0]}
                  startTime="14:00"
                  endTime="20:00"
                  timeZone="America/New_York"
                  location={event.location}
                  description={
                    event.description ||
                    "Join us for an amazing paella experience!"
                  }
                />
              )}
              {location.pathname === "/events" && (
                <DeleteEvent eventId={event.id} />
              )}
            </CardActions>
            <CardActions>
              <UpdateEvent eventId={event.id} />
            </CardActions>
          </Card>
        ))}
    </div>
  );
}
