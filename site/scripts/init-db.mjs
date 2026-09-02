// Oppretter `comments`-tabellen i databasen som `DATABASE_URL` peker på.
//
// Bruk:
//   vercel env pull .env.local
//   node --env-file=.env.local scripts/init-db.mjs
//
// Trygg å kjøre flere ganger (alt bruker "if not exists").

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL mangler. Kjør `vercel env pull .env.local` og prøv igjen med --env-file=.env.local");
  process.exit(1);
}

const schemaPath = fileURLToPath(new URL("../db/schema.sql", import.meta.url));
const schema = readFileSync(schemaPath, "utf8");

const statements = schema
  .split(/;\s*(?:\n|$)/)
  .map((s) => s.replace(/--.*$/gm, "").trim())
  .filter(Boolean);

const sql = neon(url);

for (const statement of statements) {
  await sql.query(statement);
  console.log("OK:", statement.split("\n")[0].slice(0, 70));
}

console.log(`\nFerdig – ${statements.length} setninger kjørt.`);
