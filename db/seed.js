import db from "#db/client";
import { createUser } from "#db/queries/users";
import { createEvent } from "#db/queries/events";

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
}
