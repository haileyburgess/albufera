import db from "#db/client";
import bcrypt from "bcrypt";

export async function createEvent(date, location, description) {
  const sql = `
    INSERT INTO events
    (date, location, description)
    VALUES 
    ($1, $2, $3)
    RETURNING *
    `;
  const {
    rows: [event],
  } = await db.query(sql, [date, location, description]);
  return event;
}

export async function getEvents() {
  const sql = `
    SELECT *
    FROM events
    `;
  const { rows } = await db.query(sql);
  return rows;
}
