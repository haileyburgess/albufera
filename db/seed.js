import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createEvent } from "#db/queries/events";
import { createContact } from "#db/queries/contacts";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await createUser("haileyb", "password");
  await createEvent(
    "07/12/2025",
    "Whoopsie Daisy",
    "Pop-up event at neighborhood wine bar"
  );
  await createContact("emily", "emily@test.com", "1234567", "test message");
}
