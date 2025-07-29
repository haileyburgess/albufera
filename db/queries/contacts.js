import db from "#db/client";

export async function createContact(name, email, phone, message) {
  const sql = `
    INSERT INTO contacts
    (name, email, phone, message, created_date)
    VALUES 
    ($1, $2, $3, $4, NOW())
    RETURNING *
    `;
  const {
    rows: [contact],
  } = await db.query(sql, [name, email, phone, message]);
  return contact;
}

export async function getContacts() {
  const sql = `
    SELECT *
    FROM contacts
    `;
  const {
    rows: [contacts],
  } = await db.query(sql);
  return contacts;
}
