import request from "supertest";
import { describe, it, expect, vi, beforeEach } from "vitest";
import app from "../src/app";

// Mock the entire service module
import * as userService from "../src/services/user.service";

vi.mock("../src/services/user.service");

describe("User API", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("GET /users returns all users", async () => {
    const mockUsers = [
      { id: 1, name: "Ada" },
      { id: 2, name: "Linus" },
    ];

    vi.spyOn(userService, "getUsers").mockResolvedValue(mockUsers);

    const res = await request(app).get("/users");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockUsers);
    expect(userService.getUsers).toHaveBeenCalledTimes(1);
  });

  it("POST /users creates a user", async () => {
    const newUser = { id: 3, name: "Grace" };

    vi.spyOn(userService, "createUser").mockResolvedValue(newUser);

    const res = await request(app).post("/users").send({ name: "Grace" });

    expect(res.status).toBe(201);
    expect(res.body).toEqual(newUser);
    expect(userService.createUser).toHaveBeenCalledWith("Grace");
  });

  it("POST /users returns 400 if name missing", async () => {
    const res = await request(app).post("/users").send({});

    expect(res.status).toBe(400);
    expect(res.body).toEqual({ message: "Name is required" });
  });
});
