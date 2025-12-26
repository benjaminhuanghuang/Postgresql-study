import { Pool } from "pg";

// Create a pool of connections
const pool = new Pool({
  user: "notesverb",
  host: "localhost",
  database: "postgresql-study",
  password: "notesverb123",
  port: 5432,
});

async function main() {
  // Connect and query
  const client = await pool.connect();

  try {
    // Create a table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username TEXT NOT NULL
      );
    `);

    // Insert a row
    const insertResult = await client.query(
      "INSERT INTO users (username) VALUES ($1) RETURNING *",
      ["Alice"]
    );
    console.log("Inserted user:", insertResult.rows[0]);

    // Query rows
    const result = await client.query("SELECT * FROM users");
    console.log("All users:", result.rows);
  } finally {
    client.release(); // release connection back to pool
  }
}

main().catch(console.error);
