import express from "express";
const router = express.Router;
export default router;

import { createEvent, getEvents } from "#db/queries/events";
import requireBody from "#middleware/requireBody";

// Route to GET all events for /events page

router.route("/events").get(async (req, res) => {
  try {
    const departments = await getEvents();
    res.json(events);
  } catch (error) {
    console.error("Error getting departments:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to POST event (protected route - later on)
