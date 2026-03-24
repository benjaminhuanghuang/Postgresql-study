import request from "supertest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { users } from "../src/db/schema";

const selectMock = vi.fn();
const insertMock = vi.fn();

vi.mock("../src/db", () => ({
  db: {
    select: selectMock,
    insert: insertMock,
  },
}));

import app from "../src/app";

describe("user api", () => {
  beforeEach(() => {
    selectMock.mockReset();
    insertMock.mockReset();
  });

  it("GET /users returns all users", async () => {
    const allUsers = [
      { id: 1, name: "Ada" },
      { id: 2, name: "Linus" },
    ];
    const fromMock = vi.fn().mockResolvedValue(allUsers);

    selectMock.mockReturnValue({ from: fromMock });

    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(allUsers);
    expect(selectMock).toHaveBeenCalledTimes(1);
    expect(fromMock).toHaveBeenCalledWith(users);
  });

  it("POST /users creates a user", async () => {
    const createdUsers = [{ id: 3, name: "Grace" }];
    const returningMock = vi.fn().mockResolvedValue(createdUsers);
    const valuesMock = vi.fn().mockReturnValue({ returning: returningMock });

    insertMock.mockReturnValue({ values: valuesMock });

    const response = await request(app).post("/users").send({ name: "Grace" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdUsers);
    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(insertMock).toHaveBeenCalledWith(users);
    expect(valuesMock).toHaveBeenCalledWith({ name: "Grace" });
    expect(returningMock).toHaveBeenCalledTimes(1);
  });
});
