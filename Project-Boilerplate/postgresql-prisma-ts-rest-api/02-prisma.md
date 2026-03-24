# Prisma setup

https://www.prisma.io/docs/prisma-orm/quickstart/postgresql

```sh
npm i -D prisma @types/pg
npm install @prisma/client @prisma/adapter-pg pg dotenv
```

prisma - The Prisma CLI for running commands like prisma init, prisma migrate, and prisma generate
@prisma/client - The Prisma Client library for querying your database
@prisma/adapter-pg - The node-postgres driver adapter that connects Prisma Client to your database
@types/pg - TypeScript type definitions for node-postgres

## Init prisma

```sh
npx prisma init

```

Creates a prisma directory and prisma.config.ts

## Creates the database tables based on your schema

```sh
npx prisma migrate reset
npx prisma migrate dev --name init
```

## Generate the Prisma Client

```sh
npx prisma generate
```

## Instantiate Prisma Client

```js
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export { prisma };
```

## User the client

```js
import { prisma } from "../lib/prisma";

export const getUsers = async () => {
  return prisma.user.findMany();
};
```
