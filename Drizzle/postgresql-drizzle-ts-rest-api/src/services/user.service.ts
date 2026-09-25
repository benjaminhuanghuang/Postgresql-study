/*
Easier for testing.
Move DB logic OUT of the routes/controllers
*/
import { db } from "../db";
import { users } from "../db/schema";

export const getUsers = async () => {
  return await db.select().from(users);
};

export const createUser = async (name: string) => {
  const [user] = await db.insert(users).values({ name }).returning();
  return user;
};
