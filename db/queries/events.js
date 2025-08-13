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

export async function deleteEvent(id) {
  const sql = `
  DELETE FROM events
  WHERE id = $1
  `;
  const { rows } = await db.query(sql, [id]);
  return rows[0];
}

export async function updateEvent(id, date, location, description) {
  const sql = `
    UPDATE events 
    SET date = $2, location = $3, description = $4
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await db.query(sql, [id, date, location, description]);
  return rows[0];
}
