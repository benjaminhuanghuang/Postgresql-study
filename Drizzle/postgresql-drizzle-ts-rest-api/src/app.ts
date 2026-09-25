import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// routes
app.use("/users", userRoutes);

// Default export for convenience
export default app;
