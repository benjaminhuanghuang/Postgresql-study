# Drizzle vs Prisma

Drizzle: 更接近 SQL，更快, 轻量、可控
Prisma: 更像 ORM 框架，开发体验强、自动化高

```js
// Drizzle
// SQL select
await db.select().from(users);

// Prisma
// Operate object
await prisma.user.findMany();
```

## Schema

Prisma schema = DSL, 限制多

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

Drizzle: 直接用 TS 写数据库结构, 非常灵活

```js
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name"),
  email: text("email").unique(),
});
```

## Testing and mock

Drizzle: mock the service
Prisma: mock the prisma
