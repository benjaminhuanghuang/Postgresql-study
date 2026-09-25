// prisma/seed.ts

import { db } from "./db";
import { links } from "../data/links";

async function main() {
  const existingUser = await db.orm.public.User.where({
    email: "testemail@gmail.com",
  }).first();

  if (!existingUser) {
    await db.orm.public.User.create({
      email: "testemail@gmail.com",
      role: "ADMIN",
    });
  }

  for (const link of links) {
    await db.orm.public.Link.upsert({
      create: link,
      update: link,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.close();
  });
