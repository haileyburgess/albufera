import { createContact, getContacts } from "#db/queries/contacts";
import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";
import getUserFromToken from "#middleware/getUserFromToken";
import express from "express";
const router = express.Router();
export default router;

// Route to POST new contact via form
router
  .route("/")
  .post(
    requireBody(["name", "email", "phone", "message"]),
    async (req, res) => {
      try {
        const { name, email, phone, message, created_date } = req.body;
        const contact = await createContact(name, email, phone, message);
        res.status(201).json(contact);
      } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).send("Internal server error");
      }
    }
  );

// Route to GET all contacts (protected route)

router.route("/").get(getUserFromToken, async (req, res) => {
  try {
    if (req.user) {
      const contacts = await getContacts();
      res.json(contacts);
    } else {
      res.json("You do not have access to this page.");
    }
  } catch (error) {
    console.error("Error retrieving contacts", error);
    res.status(500).send("Internal server error");
  }
});
