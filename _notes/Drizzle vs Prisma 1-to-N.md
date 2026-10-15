# Drizzle vs Prisma 1-to-N

```prisma
model User {
  id     Int     @id @default(autoincrement())
  name   String
  orders Order[]
}

model Order {
  id     Int   @id @default(autoincrement())
  amount Decimal @db.Decimal(12, 2)

  userId Int
  user   User  @relation(
    fields: [userId],
    references: [id]
  )
}
```

```ts
import { pgTable, serial, text, integer, numeric } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});

export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  amount: numeric("amount", {
    precision: 12,
    scale: 2,
  }).notNull(),

  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

export const usersRelations = relations(users, ({ many }) => ({
  orders: many(orders),
}));

export const ordersRelations = relations(orders, ({ one }) => ({
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));
```

- Prisma 的 orders Order[] 是关系字段，不是数据库列。
- Drizzle 的 users 表定义里不需要写 orders。
- 两者都把真正的外键 userId 放在 Order 表中。
- Prisma 已经在 schema.prisma 里定义了关系；Drizzle 通常需要额外定义关系，才能使用关系查询 API。

## Query

```ts
const user = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    orders: true,
  },
});

const user = await db.query.users.findFirst({
  where: (users, { eq }) => eq(users.id, 1),
  with: {
    orders: true,
  },
});
```

## Create

```ts
const user = await prisma.user.create({
  data: {
    name: "Alice",
    orders: {
      create: [{ amount: "99.90" }, { amount: "59.90" }], // Nested
    },
  },
  include: {
    orders: true,
  },
});

const user = await db.transaction(async (tx) => {
  const [newUser] = await tx
    .insert(users)
    .values({ name: "Alice" })
    .returning();

  const newOrders = await tx
    .insert(orders)
    .values([
      { amount: "99.90", userId: newUser.id },
      { amount: "59.90", userId: newUser.id },
    ])
    .returning();

  return { ...newUser, orders: newOrders };
});
```
