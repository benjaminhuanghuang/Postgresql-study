# PostgreSQL + Prisma + TS

https://www.prisma.io/docs/getting-started/prisma-orm/quickstart/postgresql

```sh

```

## Setup prisma

```sh
npm i -D prisma @types/node @types/pg
npm i @prisma/client @prisma/adapter-pg pg dotenv


npx prisma init
# create prisma folder, prisma.config.ts

Create models

npx prisma migrate dev --name init

npx prisma generate

```
