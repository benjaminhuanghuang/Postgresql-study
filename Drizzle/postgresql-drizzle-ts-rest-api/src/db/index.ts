import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "../../node_modules/@types/pg";
import * as schema from "./schema";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
