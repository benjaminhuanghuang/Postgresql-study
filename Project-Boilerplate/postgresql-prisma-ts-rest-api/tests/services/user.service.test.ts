import { describe, it, expect, vi, beforeEach } from "vitest";
import * as userService from "../../src/services/user.service";
import { prisma } from "../../src/lib/prisma";

// Mock the database
vi.mock("../../src/lib/prisma", () => ({
  prisma: {
    user: {
      findMany: vi.fn(),
      create: vi.fn(),
    },
  },
}));

describe("user.service", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getUsers returns all users", async () => {
    const mockUsers = [
      { id: 1, name: "Ada", email: "ada@example.com" },
      { id: 2, name: "Linus", email: "linus@example.com" },
    ];

    (prisma.user.findMany as any).mockResolvedValue(mockUsers);

    const result = await userService.getUsers();

    expect(result).toEqual(mockUsers);
    expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
  });

  it("createUser inserts a user and returns it", async () => {
    const newUser = { id: 3, name: "Grace", email: "grace@example.com" };

    (prisma.user.create as any).mockResolvedValue(newUser);

    const result = await userService.createUser("Grace", "grace@example.com");

    expect(result).toEqual(newUser);
    expect(prisma.user.create).toHaveBeenCalledTimes(1);
    expect(prisma.user.create).toHaveBeenCalledWith({
      data: { name: "Grace", email: "grace@example.com" },
    });
  });
});
