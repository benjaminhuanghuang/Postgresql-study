import { Request, Response } from "express";
import { getUsers, createUser } from "../services/user.service";

// GET /users
export const getUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("GET /users error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// POST /users
export const createUserHandler = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    // basic validation
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await createUser(name, email);
    res.status(201).json(user);
  } catch (error) {
    console.error("POST /users error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
