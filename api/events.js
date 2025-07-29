import express from "express";
const router = express.Router();
export default router;

import { createEvent, getEvents } from "#db/queries/events";
import requireBody from "#middleware/requireBody";
import db from "#db/client";

// Route to GET all events for /events page

router.route("/").get(async (req, res) => {
  try {
    const events = await getEvents();
    res.json([events]);
  } catch (error) {
    console.error("Error getting events:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to POST event (protected route - later on)
