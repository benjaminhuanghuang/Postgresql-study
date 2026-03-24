import { Request, Response } from "express";
import { db } from "../db";
import { users } from "../db/schema";

export const getUsers = async (_req: Request, res: Response) => {
  const allUsers = await db.select().from(users);

  res.json(allUsers);
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;

  const createdUsers = await db.insert(users).values({ name }).returning();

  res.status(201).json(createdUsers);
};
