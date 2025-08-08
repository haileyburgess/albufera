import express from "express";
const router = express.Router();
export default router;

import { createEvent, deleteEvent, getEvents } from "#db/queries/events";
import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";
import db from "#db/client";

// Route to GET all events for /events page

router.route("/").get(async (req, res) => {
  try {
    const events = await getEvents();
    res.json(events);
  } catch (error) {
    console.error("Error getting events:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to POST event (protected route)
router
  .route("/")
  .post(
    requireUser,
    requireBody(["date", "location", "description"]),
    async (req, res) => {
      try {
        const { date, location, description } = req.body;
        const event = await createEvent(date, location, description);
        res.status(201).json(event);
      } catch (error) {
        console.error("Error creating event", error);
        res.status(500).send("Server error");
      }
    }
  );

// DELETE Route (protected route)

router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await deleteEvent(id);
    if (!deleted) {
      return res.status(404).send("Event not found");
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send("Server error");
  }
});
