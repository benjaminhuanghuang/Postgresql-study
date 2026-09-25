import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

dotenv.config();

const url = process.env.DATABASE_URL!;
const queryClient = postgres(url);

export const db = drizzle(queryClient, { schema });
export type Database = typeof db;
