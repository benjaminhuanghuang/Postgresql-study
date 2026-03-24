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
