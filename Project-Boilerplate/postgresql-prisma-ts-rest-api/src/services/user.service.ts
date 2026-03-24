/*
Easier for testing.
Move DB logic OUT of the routes/controllers
*/
import { prisma } from "../lib/prisma";

export const getUsers = async () => {
  return prisma.user.findMany();
};

export const createUser = async (name: string, email: string) => {
  return prisma.user.create({ data: { name, email } });
};
