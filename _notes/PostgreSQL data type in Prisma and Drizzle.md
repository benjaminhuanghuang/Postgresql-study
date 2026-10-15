# PostgreSQL data type in Prisma and Drizzle

| postgreSQL       | Prisma                                 | Drizzle（pg-core）                |
| ---------------- | -------------------------------------- | --------------------------------- |
| INTEGER          | Int                                    | integer()                         |
| BIGINT           | BigInt                                 | bigint({ mode: "bigint" })        |
| TEXT             | String                                 | text()                            |
| BOOLEAN          | Boolean                                | boolean()                         |
| NUMERIC          | Decimal                                | numeric()                         |
| REAL             | Float                                  | real()                            |
| DOUBLE PRECISION | Float @db.DoublePrecision              | doublePrecision()                 |
| DATE             | DateTime @db.Date                      | date()                            |
| TIMESTAMPTZ      | DateTime @db.Timestamptz(3)            | timestamp({ withTimezone: true }) |
| JSONB            | Json（使用 PostgreSQL 时映射为 jsonb） | jsonb()                           |
| UUID             | String @db.Uuid                        | uuid()                            |
| TEXT[]           | String[]                               | text().array()                    |

```ts
import {
  pgTable,
  uuid,
  text,
  boolean,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  balance: numeric("balance", {
    precision: 12,
    scale: 2,
  })
    .notNull()
    .default("0"),

  isActive: boolean("is_active").notNull().default(true),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .notNull()
    .defaultNow(),
});
```

```prisma
model User {
  id        String   @id @default(uuid()) @db.Uuid
  name      String
  email     String   @unique
  balance   Decimal  @default(0) @db.Decimal(12, 2)
  isActive  Boolean  @default(true) @map("is_active")
  createdAt DateTime @default(now()) @map("created_at") @db.Timestamptz(6)

  @@map("users")
}
```
