import { describe, it, expect, vi, beforeEach } from "vitest";
import * as userService from "../../src/services/user.service";
import { db } from "../../src/db";
import { users } from "../../src/db/schema";

// Mock the database
vi.mock("../../src/db", () => ({
  db: {
    select: vi.fn(),
    insert: vi.fn(),
  },
}));

describe("user.service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getUsers returns all users", async () => {
    const mockUsers = [
      { id: 1, name: "Ada" },
      { id: 2, name: "Linus" },
    ];

    const fromMock = vi.fn().mockResolvedValue(mockUsers);
    (db.select as any).mockReturnValue({ from: fromMock });

    const result = await userService.getUsers();

    expect(result).toEqual(mockUsers);
    expect(db.select).toHaveBeenCalledTimes(1);
    expect(fromMock).toHaveBeenCalledWith(users);
  });

  it("createUser inserts a user and returns it", async () => {
    const newUser = { id: 3, name: "Grace" };

    const returningMock = vi.fn().mockResolvedValue([newUser]);
    const valuesMock = vi.fn().mockReturnValue({ returning: returningMock });
    (db.insert as any).mockReturnValue({ values: valuesMock });

    const result = await userService.createUser("Grace");

    expect(result).toEqual(newUser);
    expect(db.insert).toHaveBeenCalledTimes(1);
    expect(db.insert).toHaveBeenCalledWith(users);
    expect(valuesMock).toHaveBeenCalledWith({ name: "Grace" });
    expect(returningMock).toHaveBeenCalledTimes(1);
  });
});
