/*
Easier for testing.
Move DB logic OUT of the routes/controllers
*/
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (name: string) => {
  return prisma.user.create({ data: { name } });
};
