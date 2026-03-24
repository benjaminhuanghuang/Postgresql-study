import { Router } from "express";
import { db } from "../db";
import { users } from "../db/schema";

const router = Router();

router.get("/", async (req, res) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
});

router.post("/", async (req, res) => {
  const { name } = req.body;

  const result = await db.insert(users).values({ name }).returning();
  res.json(result);
});

export default router;
