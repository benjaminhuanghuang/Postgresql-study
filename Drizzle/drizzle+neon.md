# drizzle + Neon

```sh
npm i drizzle-orm @neondatabase/serverless dotenv
npm i -D drizzle-kit drizzle-seed
```

drizzle-orm: TypeScript ORM，跑在 @neondatabase/serverless 之上，干三件事：

- 用 TS 代码定义表结构（schema），自动推导出查询结果的类型
- 提供类型安全的查询构造器（db.select().from(articles).where(...)），也能写原生 SQL
- 需要搭配 drizzle-kit 才能把 schema 变成实际的数据库迁移

@neondatabase/serverless: Neon 官方的 Postgres 驱动，替代 pg。针对 serverless/edge 环境优化——用 HTTP/WebSocket 连接数据库而不是传统 TCP 长连接

The drizzle-kit package is all the CLI commands you need to run Drizzle. So creating migrations, running migrations, etc.

drizzle-seed 造测试/示例数据。给定 schema，能按类型自动生成随机但结构合法的假数据（字符串、日期、外键关联等），用来填充开发环境的数据库，不用手写一堆 INSERT 语句。

create drizzle.config.ts

```ts
import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

add script

```json
"db:seed": "tsx src/db/seed.ts",
"db:generate": "drizzle-kit generate",
"db:migrate": "drizzle-kit migrate"
```

## Create a Drizzle Schema
