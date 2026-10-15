# Drizzle vs Prisma

Drizzle: 更接近 SQL，更快, 轻量、可控, Use typescript, 方便与现有 TypeScript 代码结合
Prisma: 更像 ORM 框架，开发体验强、自动化高, Schema 更集中、易读

| 对比       | Prisma         | Drizzle                       |
| ---------- | -------------- | ----------------------------- |
| 定义文件   | schema.prisma  | TypeScript 文件               |
| 定义方式   | 声明式 Schema  | 函数式 API                    |
| 字段映射   | @map()         | text("column_name") 等        |
| 表名映射   | @@map()        | pgTable("users", ...)         |
| 金额类型   | Decimal        | 通常是 numeric() 返回的字符串 |
| 数据库迁移 | Prisma Migrate | Drizzle Kit                   |

```js
// Drizzle
// SQL select
await db.select().from(users);
const [user] = await db
  .insert(users)
  .values({ name: "Ada", email: "ada@test.com" })
  .returning();

const result = await db.select().from(users).where(eq(users.id, 1));
const user = result[0];
await db.delete(users).where(eq(users.id, 1));

// Prisma
// Operate object
await prisma.user.findMany();
const user = await prisma.user.create({
  data: { name: "Ada", email: "ada@test.com" },
});
const user = await prisma.user.findUnique({
  where: { id: 1 },
});
await prisma.user.delete({
  where: { id: 1 },
});
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
